/*jshint esversion: 6 */

class RankflowData {

    constructor() {

        this.PATH = "data/"; // Define files paths

        this.terms = [{
                name: "Ontario Politics",
                slug: "ontario_politics",
                videos: []
            },
            {
                name: "Ontario Election",
                slug: "ontario_election",
                videos: []
            },
            {
                name: "Kathleen Wynne",
                slug: "kathleen_wynne",
                videos: []
            },
            {
                name: "Doug Ford",
                slug: "doug_ford",
                videos: []
            },
            {
                name: "Andrea Horwath",
                slug: "andrea_horwath",
                videos: []
            },
            {
                name: "Mike Schreiner",
                slug: "mike_schreiner",
                videos: []
            }
        ];
    
        this.selectedTerm = this.terms[0].slug;
    
        this.initialDate = moment("2018-04-03");
        this.finalDate = moment("2018-05-24");
        this.numberDays = this.finalDate.diff(this.initialDate, 'days')+1;

    }

    const test() { return"opa";};

    // ##### METHODS

    getTermByName(termName) {

        termName = termName.replace(" ", "_"); // replace space with trailing

        for (let i = 0; i < this.terms.length; i++) {
            if (this.terms[i].slug == termName) {
                return this.terms[i];
            }
        }
        return null;
    }

    getDatasetByTerm(termName) {

        termName = termName.replace(" ", "_"); // replace space with trailing

        for (let i = 0; i < this.terms.length; i++) {
            if (this.terms[i].slug == termName) {
                return this.terms[i];
            }
        }
        return null;
    }

    selectTerm(term) {
        this.selectedTerm = term; //new term
        this.updateData();
    }

    updateData() {

        let selectedDataset = this.getTermByName(this.selectedTerm); //get data

        //rank
        selectedDataset.videos.sort(function (b, a) {
            return a.sumRec - b.sumRec;
        });

        selectedDataset.topTenVideos = selectedDataset.videos.slice(0, 10); //reduce

        $(rankflowData).trigger('update',[selectedDataset]);

    }

    _loadData() {

        let maxRankIndex = 10; //max videos on the rank
        let daysLoaded = 0; //start counting
        let dayIterator = moment(rankflowData.initialDate);
        let videoID = 0;

        while (dayIterator <= rankflowData.finalDate) {

            let file = `${rankflowData.PATH}ontario-elections-${dayIterator.format('YYYY-MM-DD')}.json`; //get file name

            $.getJSON(file, function (fileData) {

                let raw_date = getDateFromFilename(file); //get date from filename

                //   loop through terms
                $.each(fileData, function (term, d) {

                    let termVideoCollection = rankflowData.getTermByName(term);
                    let rankIndex = 0; //

                    //sort by reccomedation
                    d.sort(function (b, a) {
                        return a.nb_recommendations - b.nb_recommendations;
                    });

                    // loop through videos
                    $.each(d, function (i, video) {

                        video.youtubeID = video.id;
                        video.id = "v" + videoID;
                        video.date = raw_date[0];
                        video.moment = moment(raw_date[0]);
                        video.recRank = i + 1;
                        video.day = +raw_date[3];

                        termVideoCollection.videos.push(video);

                        //advance index
                        rankIndex++;
                        videoID++;
                    });

                });

                //advance date
                daysLoaded++;

                //if it is the last day
                if (daysLoaded == rankflowData.numberDays) {
                    reorderByDate();

                    rankflowData._parseData();
                    rankflowData.getRankedChannels(rankflowData.selectedTerm);
                    
        
                    $(rankflowData).trigger('success');

                    rankflowData.updateData();

                    // console.log(rankflowData);
                }

            });

            //advance date

            dayIterator.add(1, 'days');

        }

        // end of loop

        function getDateFromFilename(file) {

            //get date from filename
            const regex = /(\d{4})-(\d{2})-(\d{2})/; // regex find date format "YYYY-MM-DD"
            const raw_date = file.match(regex);

            return raw_date;
        }

        function reorderByDate() {
            /*loading files assyncroniously can make data be placed in diferent order
            this fuctioon order the data by date (alphabetically)*/
            $.each(rankflowData.terms, function (i, term) {

                term.videos.sort(function (a, b) {
                    if (a.date < b.date) {
                        return -1;
                    }
                    if (a.date > b.date) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });


            });
        }


    }

    _parseData() {

        $.each(this.terms, function (term, t) {
    
            let videos = [];
    
            $.each(t.videos, function (i, v) {
    
                let video = checkRecurrency(v, videos);
                // let totalRec = 0;
    
                if (video == null) {
    
                    video = {
                        id: v.id,
                        youtubeID: v.youtubeID,
                        title: v.title,
                        channel: v.channel,
                        sumRec: 0,
                        dates: []
                    };
    
                    videos.push(video);
    
                }
    
                let day = {
                    date: v.date,
                    day: v.day,
                    moment: v.moment,
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
    
                video.dates.push(day);
    
            });
    
            t.videos = videos;
    
        });
    
        function checkRecurrency(video, list) {
    
            for (let i = 0; i < list.length; i++) {
                if (list[i].youtubeID == video.youtubeID) {
                    return list[i];
                }
            }
    
            return null;
    
        }
    
    
    }

    getRankedChannels(term) {


        let dataSet = this.getDatasetByTerm(term);
        console.log(dataSet);

        let channels = [];

        for (let video of dataSet.videos) {

            let channelName = video.channel;

            let channel = checkRecurrency(channelName,channels);

            console.log(video.channel);
        }


        function checkRecurrency(channel, channels) {
    
            for (let i = 0; i < channels.length; i++) {
                if (channels[i].name == channel) {
                    return channels[i];
                }
            }
    
            return null;
    
        }
    }


}

$(document).ready(function () {
    rankflowData._loadData();
});




//init
window.rankflowData = new RankflowData();
console.log(rankflowData);

