// modules
import ee from 'event-emitter';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'moment/locale/en-ca';
import {json} from 'd3-fetch/dist/d3-fetch.min';
import chroma from 'chroma-js/chroma.min';

function Datamodel() {

	//emitter
	ee(this);

	moment.locale('pt-br');

	this.PATH = './dataset'; // Define files paths

	this.videoCollection = {
		videos: [],
		channels: []
	};

	this.temp;
	this.daysLoaded = 0; // start counting


	this.init = function (app) {
		// temporary hack for a version
		// if ($('#startPeriod').html()) {
		// 	this.period.startDate = moment($('#startPeriod').html());
		// 	this.numberDays = this.period.endDate.diff(this.period.startDate, 'days') + 1;
		// }

		this.app = app;

		this.selectedTerm = app.terms[0].slug;
		this.initialDate = moment(app.period.start);
		this.finalDate = moment(app.period.end);
		this.period = {
			startDate: this.initialDate, // this.initialDate,
			endDate: this.finalDate,
		};
		this.totalNumberDays = this.finalDate.diff(this.initialDate, 'days') + 1;
		this.numberDays = this.period.endDate.diff(this.period.startDate, 'days') + 1;
		this.maxRankIndex = 10;

		this.topChannels = [];
	};

	this.loadData = function (term) {

		this.selectedTerm = term;

		datamodel.videoCollection.videos = [];
		datamodel.videoCollection.channels = [];

		let dayIterator = moment(this.initialDate);
		const fileArray = [];

		//
		while (dayIterator <= this.finalDate) {
			const file = `${this.PATH}/video-infos-${this.selectedTerm.slug}-${dayIterator.format('YYYYMMDD')}.json`; // get file name
			fileArray.push(file);
			dayIterator.add(1, 'days');
		}

		const loadPromise = new Promise(
			(resolve) => {
				Promise.all(fileArray.map(this.loadfile))
					.then(function transform(collection) {
						const usefulData = collection.filter(data => data != undefined);
						return Promise.all(usefulData.map(datamodel.transformDailyData));
					}).then(function () {
						datamodel.reorderByDate();
						return datamodel.parseData();
					}).then(function () {
						datamodel.getRankedChannels();
						resolve(datamodel.videoCollection);
					});
			});

		return loadPromise;
	};

	this.loadfile = function (file) {
		const loadPromise = new Promise(
			(resolve) => {
				json(file)
					.then(function (data) {
						datamodel.daysLoaded++;
						const d = {
							filename: file,
							data: data
						};
						// console.log(d)
						resolve(d);
					})
					.catch(function() {
						resolve();
					});
			});
		return loadPromise;
	};

	this.transformDailyData = function (item) {

		return new Promise(
			(resolve) => {

				const filedata = item.data;

				let raw_date = datamodel.getDateFromFilename(item.filename); //get date from filename
				let rankIndex = 0; //

				// transform into an array
				const arrayFileData = Object.values(filedata);

				//     //sort by reccomedation
				arrayFileData.sort(function (b, a) {
					return a.nb_recommendations - b.nb_recommendations;
				});

				// loop through videos - manipulate and add information
				for (let video of arrayFileData) {

					video.youtubeID = video.id;
					// video.id = 'v' + videoID;
					video.date = `${raw_date[1]}-${raw_date[2]}-${raw_date[3]}`;
					video.moment = moment(`${raw_date[1]}-${raw_date[2]}-${raw_date[3]}`);
					video.recRank = rankIndex + 1;
					video.day = +raw_date[3];
					video.id = '_' + video.id;

					delete video.key;

					datamodel.videoCollection.videos.push(video);

					//advance index
					rankIndex++;
					// videoID++;
				}

				//advance date
				datamodel.daysLoaded++;


				resolve(datamodel.videoCollection);
			});

	};

	// get date from filename
	this.getDateFromFilename = function getDateFromFilename(file) {
		const regex = /(\d{4})(\d{2})(\d{2})/; // regex find date format 'YYYY-MM-DD'
		const rawDate = file.match(regex);
		return rawDate;
	};

	/* loading files assyncroniously can make data be placed in diferent order
	this fuctioon order the data by date (alphabetically) */
	this.reorderByDate = function reorderByDate() {
		datamodel.videoCollection.videos.sort((a, b) => {
			if (a.date < b.date) {
				return -1;
			}
			if (a.date > b.date) {
				return 1;
			}
			// names must be equal
			return 0;
		});
	};


	this.parseData = function () {

		return new Promise(
			(resolve) => {

				//video collection for this term
				let newCollection = [];

				for (let v of datamodel.videoCollection.videos) {

					//get video in the collection
					let video = newCollection.find(vid => vid.youtubeID == v.youtubeID);

					if (video === undefined) {

						video = {
							id: v.id,
							youtubeID: v.youtubeID,
							title: v.title,
							channel: v.channel,
							sumRec: 0,
							dates: []
						};

						newCollection.push(video);

					}

					let day = {
						date: v.date,
						day: v.day,
						moment: v.moment,
						title: v.title,
						depth: v.depth,
						dislikes: v.dislikes,
						likes: v.likes,
						mult: v.mult,
						nb_recommendations: v.nb_recommendations,
						recommendations: v.recommendations,
						views: v.views,
						recRank: v.recRank
					};

					video.sumRec += v.nb_recommendations;

					//fix empty title
					if (video.title == '') video.title = v.title;

					video.dates.push(day);
				}

				datamodel.videoCollection.videos = newCollection;

				//Rorder
				datamodel.videoCollection.videos.sort(function (b, a) {
					return a.sumRec - b.sumRec;
				});

				resolve();
			});

	};

	this.getRankedChannels = function() {

		const channels = []; // collection

		//loop
		for (let video of datamodel.videoCollection.videos) {

			//channel name
			let channelName = video.channel;

			//total video recommendation
			let videoTotalRecommendation = 0;
			for (let date of video.dates) {
				videoTotalRecommendation += date.nb_recommendations;
			}

			//get channel in the collection
			let channel = channels.find(channel => channel.name == channelName);

			//if not there yet, push it // if it is update it
			if(channel === undefined) {
				channel = {
					name: channelName,
					numberVideos: 1,
					numberRecommendations: videoTotalRecommendation
				};
				channels.push(channel);
			} else {
				//update
				channel.numberVideos++;
				channel.numberRecommendations += videoTotalRecommendation;
			}
		}

		//sort by numbner of recommendation
		channels.sort(function (b, a) {
			return a.numberRecommendations - b.numberRecommendations;
		});


		//add colour based on pallete 
		if (this.app.channelColours) this._setChannelColour(channels);
		

		//save;
		datamodel.videoCollection.channels = channels;
		return datamodel.videoCollection.channels;
	};

	this._setChannelColour = function(channels) {
		const _this = this;

		channels.forEach( function(c,i) {

			//top ten color /// more on gray
			if (i < 10) {
				// c.colour = app.channelColours[i];
				let colour = checkChannelColour(c.name);
				if (colour) {
					c.colour = colour;
				} else {

					colour = chroma(_this.app.channelColours[i]).hex();
					let testDuplication = true;
					let multiplier = 1;
					while (testDuplication) {
						testDuplication = checkColourDuplicationTopTen(colour);
						if (testDuplication) {
							colour = chroma(colour).saturate(multiplier).hex();
							multiplier++;
						}
					}
					
					c.colour = colour;


					_this.topChannels.push(c); 
				}

			} else {
				// c.colour = '#ccc';
				c.colour = chroma('lightgray').hex();
			}

		});

		function checkChannelColour(channelName) {
			const channel = datamodel.topChannels.find(c => c.name == channelName);
			if (channel) return channel.colour;
			return null;
		}

		function checkColourDuplicationTopTen(colour) {
			const colourChannel = datamodel.topChannels.find(c => c.colour == colour);
			if (colourChannel) {
				return true;
			} else {
				return false;
			}
		}
	};

	this.changePeriod = function(term,start, end) {

		let startDate = moment(start);
		let endDate = moment(end);

		// inverse order if the dates are switched
		if (startDate.isAfter(endDate)) {
			let t = startDate;
			startDate = endDate;
			endDate = t;
		}

		//date limits
		if (startDate.isBefore(this.initialDate)) { startDate = this.initialDate; }
		if (endDate.isAfter(this.finallDate)) { endDate = this.finallDate; }

		//update period
		this.period.startDate = startDate;
		this.period.endDate = endDate;

		//update numbr of days
		this.numberDays = this.period.endDate.diff(this.period.startDate, 'days')+1;

		//test
		this.filterVidesByPeriod(term,start,end);

	};

	this.filterVidesByPeriod = function(tSlug) {

		const _this = this;
		
		const termSelected = this.terms.find(term => term.slug == tSlug);

		// const filteredData = termSelected;

		//filter data
		termSelected.filteredPeriod = {
			startDate: this.period.startDate,
			endDate: this.period.endDate,
			videos: []
		};
		
		for(const video of termSelected.videos) {
			let filteredDates = video.dates.filter(isBetweenDates);
			
			//if any, add to the list
			if (filteredDates.length > 0) {
				let filteredVideo = {
					channel: video.channel,
					id: video.id,
					title: video.title,
					youtubeID: video.youtubeID
				};
				filteredVideo.dates = filteredDates;
				termSelected.filteredPeriod.videos.push(filteredVideo);

				//check the sum of recommendation for the period
				filteredVideo.sumRec = 0;
				for(const day of filteredDates) {
					filteredVideo.sumRec  += day.nb_recommendations;
				}
			}
		}

		function isBetweenDates(element) {
			return element.moment.isBetween(_this.period.startDate,_this.period.endDate, 'day','[]');
		}

		//Rorder
		termSelected.filteredPeriod.videos.sort(function (b, a) {
			return a.sumRec - b.sumRec;
		});

		this.updateData();

	};

	// this.selectTerm = function(term) {
	// 	this.selectedTerm = term; //new term
	// 	const termSelected = this.terms.find(term => term.slug == this.selectedTerm);

	// 	$('#current-view').find('#current-tern').html(termSelected.name);

	// 	if(termSelected.videos.length == 0) {
	// 		datamodel.emit('load',term);
	// 		// $(rankflowData).trigger('load');
	// 		this.loadData();
	// 	} else {
	// 		this.updateData();
	// 	}
		
	// };

	this.updateData = function() {

		const selectedDataset = this.terms.find(term => term.slug == this.selectedTerm);
		datamodel.emit('update',[selectedDataset]);

		// $(rankflowData).trigger('update',[selectedDataset]);

	};

	this.displayPeriodStartDate = function() {
		return this.period.startDate.locale('pt').format('DD MMMM ');
	};

	this.displayPeriodEndDate = function() {
		return this.period.endDate.locale('pt').format('DD MMMM');
	};
}

const datamodel = new Datamodel();
export default datamodel;
