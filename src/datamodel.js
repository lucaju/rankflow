// modules
// import EventEmitter from 'event-emitter';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'moment/locale/en-ca';
import chroma from 'chroma-js/chroma.min';

import colourPalette from './components/utilities/colour-palette';


//settings
moment.locale('pt-br');

const PATH = './dataset'; // Define files paths
// export const event = new EventEmitter();

const collection = {
	videos: [],
	channels: [],
	topChannels: []
};
const period = {
	start: undefined,
	end: undefined,
	duration: undefined
};

let selectedTerm;


const init = config => {
	selectedTerm = config.terms[0].slug;
	period.start = moment(config.period.start);
	period.end = moment(config.period.end);
	period.duration =  period.end.diff(period.start, 'days') + 1;
};

export const loadData = async term => {

	selectedTerm = term;

	collection.videos = [];
	collection.channels = [];

	let dayIterator = moment(period.start);

	//
	while (dayIterator <= period.end) {
		const file = `${PATH}/video-infos-${selectedTerm.slug}-${dayIterator.format('YYYYMMDD')}.json`; // get file name
		dayIterator.add(1, 'days');

		try {

			const res = await fetch(file);
			if (res.status !== 200) continue;
			
			const data = await res.json();
			if (data === undefined) continue;

			addDataToCollection(data, dayIterator);

		} catch (err) {
			continue;
		}
		
	}

	parseData();
	getRankedChannels();

	return collection;

};

const addDataToCollection = (data, date) => {

	const arrayData = Object.values(data);

	//sort by reccomedation
	arrayData.sort((b, a) => a.nb_recommendations - b.nb_recommendations);
	let rankIndex = 1; //

	// loop through videos - manipulate and add information
	for (const video of arrayData) {

		video.youtubeID = video.id;
		video.date = date.format('YYYY-MM-DD');
		video.moment = date;
		video.recRank = rankIndex;
		video.day = date.format('DD');
		video.id = '_' + video.id;

		delete video.key;

		collection.videos.push(video);

		rankIndex++;
	}

	return collection;

};


const parseData = () => {

	//video collection for this term
	let newCollection = [];

	for (const v of collection.videos) {

		//get video in the collection
		let video = newCollection.find(vid => vid.youtubeID === v.youtubeID);

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

		const day = {
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
		if (video.title === '') video.title = v.title;

		video.dates.push(day);
	}

	collection.videos = newCollection;

	//Rorder
	collection.videos.sort((b, a) => a.sumRec - b.sumRec);

	return collection;

};

const getRankedChannels = () => {

	const channels = []; // collection

	//loop
	for (const video of collection.videos) {

		//channel name
		let channelName = video.channel;

		//total video recommendation
		let videoTotalRecommendation = 0;
		for (const date of video.dates) {
			videoTotalRecommendation += date.nb_recommendations;
		}

		//get channel in the collection
		let channel = channels.find(channel => channel.name === channelName);

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
	channels.sort((b, a) =>  a.numberRecommendations - b.numberRecommendations);

	//add colour based on pallete 
	setChannelColour(channels);
	

	//save;
	collection.channels = channels;
	return collection.channels;
};

const setChannelColour = channels => {

	channels.forEach((c,i) => {

		//top ten color /// more on gray
		if (i < 10) {

			let colour = checkChannelColour(c.name);

			if (colour) {
				c.colour = colour;

			} else {
				colour = chroma(colourPalette.channelColours[i]).hex();
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
				collection.topChannels.push(c); 

			}

		} else {
			c.colour = chroma('lightgray').hex();

		}

	});	

};

const getChannelByName = channelName => collection.channels.find(channel => channel.name == channelName);

const checkChannelColour = channelName => {
	const channel = collection.topChannels.find(c => c.name === channelName);
	if (channel) return channel.colour;
	return null;
};

const checkColourDuplicationTopTen = colour => collection.topChannels.find(c => c.colour === colour);

const changePeriod = (term, start, end) => {

	let startDate = moment(start);
	let endDate = moment(end);

	// inverse order if the dates are switched
	if (startDate.isAfter(endDate)) {
		let t = startDate;
		startDate = endDate;
		endDate = t;
	}

	//date limits
	if (startDate.isBefore(period.start)) startDate = period.start;
	if (endDate.isAfter(period.end)) endDate = period.end;

	//update period
	period.start = startDate;
	period.end = endDate;

	//update numbr of days
	period.duration = period.end.diff(period.start, 'days')+1;

	//test
	filterVidesByPeriod(term,start,end);

};

const filterVidesByPeriod = () => {

	//filter data
	const selectedPeriod = {
		start: period.start,
		end: period.end,
		videos: []
	};
	
	for (const video of selectedPeriod.videos) {
		const filteredDates = video.dates.filter(isBetweenDates);
		
		//if any, add to the list
		if (filteredDates.length === 0) continue;

		const filteredVideo = {
			channel: video.channel,
			id: video.id,
			title: video.title,
			youtubeID: video.youtubeID
		};
		filteredVideo.dates = filteredDates;
		selectedPeriod.videos.push(filteredVideo);

		//check the sum of recommendation for the period
		filteredVideo.sumRec = 0;
		for (const day of filteredDates) {
			filteredVideo.sumRec  += day.nb_recommendations;
		}
		
	}

	const isBetweenDates = element => element.moment.isBetween(period.start, period.endD, 'day','[]');

	//Rorder
	selectedPeriod.videos.sort((b, a) => a.sumRec - b.sumRec);

	this.updateData();
	this.emit('update',[selectedPeriod]);

	return selectedPeriod;

};

export default {
	init,
	// event,
	loadData,
	changePeriod,
	getChannelByName
};
