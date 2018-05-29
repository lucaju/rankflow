/*jshint esversion: 6 */

(function (window) {

    function RankflowData() {

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

        this.selectedTerm = this.terms[2].slug;
        this.initialDate = moment("2018-04-03");
        this.finalDate = moment("2018-05-28");
        this.numberDays = this.finalDate.diff(this.initialDate, 'days')+1;

        //##### METHODS

        this.getTermByName = function (termName) {

            termName = termName.replace(" ", "_"); // replace space with trailing

            for (let i = 0; i < this.terms.length; i++) {
                if (this.terms[i].slug == termName) {
                    return this.terms[i];
                }
            }
            return null;
        };

        this.selectTerm = function(term) {
            this.selectedTerm = term; //new term
            this.updateData();
        };

        this.updateData = function() {

            let selectedDataset = this.getTermByName(this.selectedTerm); //get data

            //rank
            selectedDataset.videos.sort(function (b, a) {
                return a.sumRec - b.sumRec;
            });

            this.getRankedChannels(this.selectedTerm);

            selectedDataset.topTenVideos = selectedDataset.videos.slice(0, 10); //reduce

            $(rankflowData).trigger('update',[selectedDataset]);

        };

        this._loadData = function () {

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
                        rankflowData.allFilesLoaded();
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
    
    
        };

        this.allFilesLoaded = function() {
    
            this._parseData();
            this.getRankedChannels(rankflowData.selectedTerm);

            //test
            this.filterVidesByPeriod("kathleen_wynne",moment('2018-05-25'),moment('2018-05-28'));

            $(this).trigger('success');

            this.updateData();

            
        };
    
        this._parseData = function() {
    
            $.each(this.terms, function (term, t) {
                
                //video collection for this term
                let videos = [];
        
                $.each(t.videos, function (i, v) {

                    //get video in the collection
                    let video = videos.find(vid => vid.youtubeID == v.youtubeID);
                    
                    
                    if (video === undefined) {
        
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
        
        };

        this.getRankedChannels = function(term) {

            //select term
            let dataSet = this.getTermByName(term);
            
            //if channle is already parserd
            if(dataSet.channels) {
                return dataSet.channels;
            }

            const channels = []; // collection

            //loop
            for (let video of dataSet.videos) {

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

            //save;
            dataSet.channels = channels;
            return dataSet.channels;
        };

        this.filterVidesByPeriod = function(tSlug, start,end) {

            const termSelected = this.terms.find(term => term.slug == tSlug);
            const startDate = moment(start);
            const endDate = moment(end);

            const filteredData = termSelected;

            //filter data
            filteredData.filteredPeriod = {
                startDate: startDate,
                endDate: endDate,
                videos: []
            };
            
            for(const video of filteredData.videos) {
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
                    filteredData.filteredPeriod.videos.push(filteredVideo);

                    //check the sum of recommendation for the period
                    filteredVideo.sumRec = 0;
                    for(const day of filteredDates) {
                        filteredVideo.sumRec  += day.nb_recommendations;
                    }
                }
            }

            function isBetweenDates(element, index, array) {
                return element.moment.isBetween(startDate,endDate, 'day','[]');
            }

            console.log(filteredData);    

        };


    }

    $(document).ready(function () {
        rankflowData._loadData();
    });

    //init
    window.rankflowData = new RankflowData();

})(window); //Pass in a reference to the global window object