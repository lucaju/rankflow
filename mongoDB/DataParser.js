
const axios = require('axios');
const chalk = require('chalk');
const cliSpinners = require('cli-spinners');
const express = require('express')
const fs = require('fs-extra');
const jsonfile = require('jsonfile');
const log = require('single-line-log').stdout;
const moment = require('moment');
const MongoClient = require('mongodb').MongoClient;

const config = require('./src/visconfig.json');


//Express server
const app = express()
app.use('/dataset', express.static(__dirname + '/dataset'));
const port = 3000
let server = app.listen(port, () => console.log(chalk.cyan(`Initiate Server on on port ${port}!`)));
// app.get('/', (req, res) => res.send('Hello World!'));

//Mongo DB
const useRemoteMongoDB = true; //false
let mongoURI = 'mongodb://localhost:27017'; /// exevute - mongod - on terminal
if (useRemoteMongoDB) mongoURI = 'mongodb+srv://lucaju:Dreaming.80@fluxoart-ik2c8.gcp.mongodb.net/test?retryWrites=true';

let mongoClient;
let mongoDB;

function MongoAPI() {

	const mongoConnect = function mongoConnect() {
		return new Promise(
			(resolve) => {
				const client = new MongoClient(mongoURI, { useNewUrlParser: true });
				client.connect(err => {

					if (err) {
						console.error(err)
						return
					}
					// console.log('mongo connected')
					resolve(client);
				});
			});
	}

	this.insertMany = function insertMany(collection,data) {
		return new Promise(
			(resolve) => {
				mongoConnect()
					.then(client => {

						const mongoCollection = client.db('rankflow').collection(collection);
						// console.log('mongo saving')
						const spinner = cliSpinners[process.argv[2] || 'dots'];
						let i = 0;

						let spinnerInterval = setInterval(() => {
							const {frames} = spinner;
							log(frames[i = ++i % frames.length] + ' saving');
						}, spinner.interval);

						mongoCollection.insertMany(data)
							.then(result => {
								clearInterval(spinnerInterval);
								log('saved');
								// console.log(chalk.blue(`${result.ops.length} items inserted`));
								client.close();
								// console.log('mongo disconected')
								resolve(result.ops);
							})
							.catch(err => {
								console.log(chalk.red(err));
							});

					}).catch(err => {
						console.log(chalk.red(err));
					});
			});
	};

	this.insertOne = function insertOne(collection,item) {
		return new Promise(
			(resolve) => {
				mongoConnect()
					.then(client => {

						const mongoCollection = client.db('rankflow').collection(collection);

						mongoCollection.insertOne(item)
							.then(result => {
								// console.log(chalk.blue(`1 item inserted`));
								client.close();
								// console.log('mongo disconected')
								resolve(result.ops);
							})
							.catch(err => {
								console.log(chalk.red(err));
							});

					}).catch(err => {
						console.log(chalk.red(err));
					});
			});
	};


	this.find = function find(collection,query) {
		return new Promise(
			(resolve) => {
				mongoConnect()
					.then(client => {

						const mongoCollection = client.db('rankflow').collection(collection);

						mongoCollection.find(query).toArray()
							.then(result => {
								// console.log(result);
								client.close();
								resolve(result);
							})
							.catch(err => {
								console.log(chalk.red(err));
							});

					}).catch(err => {
						console.log(chalk.red(err));
					});
			});
	};


}

const mongoAPI = new MongoAPI();



function DataParser() {
	
	this.PATH = 'http://localhost:3000/dataset/'; // Define files paths
	this.terms = config.terms;
	this.videoCollection = [];
	this.channelCollection = [];

	this.startDate = moment(config.period.start);
	// this.endDate = moment(config.period.start).add(2, 'days');
	this.endDate = moment(config.period.end);

	var countVTerm = 0;

	let allVideosDB = [];
	let allRaw = [];
	
	let topViews = [];
	let topViewsN = 10;
	let minViews = 0;

	let topLikes = [];
	let topLikesN = 10;
	let minLikes = 0;

	let topDislikes = [];
	let topDislikesN = 10;
	let minDislikes = 0;

	this.init = function init () {

	};

	this.createDatabase = async function createDatabase() {

		for (const term of dataParser.terms) {
			await loadData(term);
		}
		console.log(chalk.red('Terms Done!'));

		console.log(chalk.blue('videos: '+allVideosDB.length));
		console.log(chalk.blue('raw: '+allRaw.length));

		// await mongoAPI.insertMany('raw-brasil',allRaw);
		await mongoAPI.insertMany('videos-brasil',allVideosDB);

		console.log(chalk.green('\nDone!'));
		server.close();
	
	};

	const loadData = async term => {

		try {

			const _this = dataParser;

			let dayIterator = moment(_this.startDate);
			const fileArray = [];


			while (dayIterator.isBefore(_this.endDate)) {
				const file = `${_this.PATH}video-infos-${term.slug}-${dayIterator.format('YYYYMMDD')}.json`; // get file name
				fileArray.push(file);
				dayIterator.add(1, 'days');
			}

			let daysComplete = 0;
			let numVideos = 0;

			for (const file of fileArray) {
				const fileData = await loadfile(file);
				if (fileData !=  null) {
					daysComplete++;
					numVideos += fileData.length;
				}
			}

			console.log(chalk.dim(`${term.name} | ${daysComplete} days | ${numVideos} videos | completed!`))

			return fileArray;

		} catch (error) {
			console.log(chalk.yellow.dim(`NOT:${term}`));
			// console.log(error);
			return null;
		}
		
	};


	const loadfile = async file => {
		try {
			const response = await axios.get(file);
			const data = response.data;
	
			return parse(file,data);;
			
		} catch (error) {
			// console.log(error);
			return null;
		}
	};

	const parse = function(file,data) {

		const arrayFileData = Object.values(data);

		for (const video of arrayFileData) {
			
			let v = addToLargerVideoDataset(file,video);
			// checkTopViews(video);
			// checkTopLikes(video);
			// checkTopDislikes(video);

			// dCollection.push(v);



			const termName = getTermFromFileName(file);
			const cat = getTermCategoryFromFileName(file);
			let date = getDateFromFileName(file);
			date = moment(date);

			video.term = termName;
			video.category = cat;
			video.date = date.format('YYYY-MM-DD');

			allRaw.push(video);

			log(`${allVideosDB.length} | ${allRaw.length} - `);
			

		}

		countVTerm += arrayFileData.length;

		return arrayFileData;

	};

	const addToLargerVideoDataset = function addToLargerVideoDataset(file,videoData) {

		let video = allVideosDB.find( i => { return (i.id == videoData.id) ? i : null; });

		if (video == null) {
			video = transformVideoData(videoData);
			if (video == undefined) console.log(file,video)
			allVideosDB.push(video)
		};

		video = addTermToVideo(video,file);
		video = addDayDataToVideo(video,file,videoData);
		
		video.totalRec = video.totalRec + videoData.nb_recommendations;

		return video;

	}

	const transformVideoData = function transformVideoData(videoData) { 

		let v = {
			id: videoData.id,
			title: videoData.title,
			channel: videoData.channel,
			topViews: videoData.views,
			topLikes: videoData.likes,
			topDislikes: videoData.dislikes,
			depthAvg: videoData.depth,
			totalRec: videoData.nb_recommendations,
			terms: [],
			
		};

		return v;
	}

	const addTermToVideo = function addTermToVideo(video,file) {

		const termName = getTermFromFileName(file);
		const cat = getTermCategoryFromFileName(file);

		let term = video.terms.find( t => { return (t.term == termName) ? t : null;} );

		if (term == null) {
			video.terms.push(
				{
					term: termName,
					category: cat,
					dates: []
				}
			)
		}

		return video;
	}

	const addDayDataToVideo = function addDayDataToVideo(video,file,videoData) {

		let date = getDateFromFileName(file);
		date = moment(date);

		const termName = getTermFromFileName(file);

		const term = video.terms.find( t => { return (t.term == termName) ? t : null;} );
		

		if (term != null) {

			const termIndex = video.terms.indexOf(term);
			video.terms[termIndex].dates.push(
				{
					day: date.format('YYYY-MM-DD'),
					likes: videoData.likes,
					dislikes: videoData.dislikes,
					views:videoData.views,
					mult: videoData.mult,
					depth: videoData.depth,
					recRank: videoData.nb_recommendations,
					recommendations: videoData.recommendations,
				}
			)
		}

		return video;

	}

	const getDateFromFileName = function getDateFromFileName(file) {
		const regex = /(\d{4})(\d{2})(\d{2})/; // regex find date format 'YYYY-MM-DD'
		const rawDate = file.match(regex);
		return rawDate[0];
	}

	const getTermFromFileName = function getTermFromFileName(file) {
		let t = file.substring(42,file.length-14)
		t = t.split('-')
		return t[0];
	}

	const getTermCategoryFromFileName = function getTermCategoryFromFileName(file) {
		let t = file.substring(42,file.length-14)
		t = t.split('-')
		return t[1];
	}

	const checkTopViews = function(iVideo) {
		if (iVideo.views > minViews) {

			let tVideo = topViews.find( v => {
				return (v.id == iVideo.id) ? v : null
			});

			if (tVideo == null) {
				topViews.push(iVideo);
			} else {
				tVideo.view = iVideo.view;
			};


			topViews.sort(function (b, a) {
				return a.views - b.views;
			});

			topViews.splice(topViewsN,1);
		}
	}

	const checkTopLikes = function(iVideo) {
		if (iVideo.likes > minLikes) {

			let tVideo = topLikes.find( v => {
				return (v.id == iVideo.id) ? v : null
			});

			if (tVideo == null) {
				topLikes.push(iVideo);
			} else {
				tVideo.view = iVideo.view;
			};


			topLikes.sort(function (b, a) {
				return a.likes - b.likes;
			});

			topLikes.splice(topLikesN,1);
		}
	}

	const checkTopDislikes = function(iVideo) {
		if (iVideo.dislikes > minDislikes) {

			let tVideo = topDislikes.find( v => {
				return (v.id == iVideo.id) ? v : null
			});

			if (tVideo == null) {
				topDislikes.push(iVideo);
			} else {
				tVideo.view = iVideo.view;
			};


			topDislikes.sort(function (b, a) {
				return a.dislikes - b.dislikes;
			});

			topDislikes.splice(topDislikesN,1);
		}
	}

	this.saveJson = function saveJson(data) {

		return new Promise(
			(resolve, reject) => {

				const folder = './json';
				const fileName = `allVideoDB.json`;

				data.folder = folder;
				data.fileName = fileName;

				console.log(chalk.green('-----------------'));
				console.log(`Writing data to ${folder}/${fileName}`);

				if (!fs.existsSync(folder)) fs.mkdirSync(folder);

				//Save Json file
				jsonfile.writeFile(`${folder}/${fileName}`, data, {
					spaces: 4
				}, function (err) {
					if (err) {
						console.log(err);
						reject(err);
					} else {
						console.log(chalk.green('Json: Data written!'));
						resolve(data);
					}
				});

			});

	};



	this.getRankedChannels = function () {

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
			if (channel === undefined) {
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


}

const dataParser = new DataParser();
// dataParser.init()
// dataParser.createDatabase();
