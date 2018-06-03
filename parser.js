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
        this.finalDate = moment("2018-06-02");
        this.period = {
            startDate: this.initialDate,
            endDate: this.finalDate
        };
        this.numberDays = this.period.endDate.diff(this.period.startDate, 'days')+1;

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
            console.log(selectedDataset);
            selectedDataset.filteredPeriod.videos.sort(function (b, a) {
                return a.sumRec - b.sumRec;
            });

            this.getRankedChannels(this.selectedTerm);

            // selectedDataset.topTenVideos = selectedDataset.filteredPeriod.videos.slice(0, 10); //reduce

            $(rankflowData).trigger('update',[selectedDataset]);

        };

        this.displayPeriodStartDate = function() {
            return this.period.startDate.format("MMMM Do");
        };

        this.displayPeriodEndDate = function() {
            return this.period.endDate.format("MMMM Do");
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

            $(this).trigger('success');

            // this.updateData();

            this.changePeriod("kathleen_wynne",moment('2018-05-09'),moment('2018-06-02'));
            
        };
    
        this._parseData = function() {

            const _this = this;
    
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

                    
                t.filteredPeriod  = {
                    startDate: _this.period.startDate,
                    endDate: _this.period.endDate,
                    videos: videos
                };
        
            });
        
        };

        this.getRankedChannels = function(term) {

            

            //select term
            let dataSet = this.getTermByName(term);

            // console.log(dataSet);
            
            //if Channel is already parserd
            // if(dataSet.channels) {
            //     return dataSet.channels;
            // }

            const channels = []; // collection

            //loop

            for (let video of dataSet.filteredPeriod.videos) {

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

        this.filterVidesByPeriod = function(tSlug, start,end) {

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

            function isBetweenDates(element, index, array) {
                return element.moment.isBetween(_this.period.startDate,_this.period.endDate, 'day','[]');
            }

            console.log(termSelected); 
            
            //update channel list
            this.getRankedChannels(rankflowData.selectedTerm);

            this.updateData();

        };


    }

    $(document).ready(function () {
        rankflowData._loadData();
    });

    //init
    window.rankflowData = new RankflowData();

})(window); //Pass in a reference to the global window object