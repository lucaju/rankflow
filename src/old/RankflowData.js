/*jshint esversion: 6 */

(function (window) {

    function RankflowData() {

        this.PATH = "dataset/"; // Define files paths

        this.terms = [
            {
                name: "Lula",
                slug: "Lula-Lula",
                videos: []
            },{
                name: "Lula Presidente",
                slug: "Lula-Lula Presidente",
                videos: []
            },{
                name: "Fernando Haddad",
                slug: "Haddad-Fernando Haddad",
                videos: []
            },{
                name: "Haddad Presidente",
                slug: "Haddad-Haddad Presidente",
                videos: []
            },{
                name: "Geraldo Alckmin",
                slug: "Alckmin-Geraldo Alckmin",
                videos: []
            },{
                name: "Alckmin Presidente",
                slug: "Alckmin-Alckmin Presidente",
                videos: []
            },{
                name: "Jair Bolsonaro",
                slug: "Bolsonaro-Jair Bolsonaro",
                videos: []
            },{
                name: "Bolsonaro Presidente",
                slug: "Bolsonaro-Bolsonaro Presidente",
                videos: []
            },{
                name: "Guilherme Boulos",
                slug: "Boulos-Guilherme Boulos",
                videos: []
            },{
                name: "Boulos Presidente",
                slug: "Boulos-Boulos Presidente",
                videos: []
            },{
                name: "Ciro Gomes",
                slug: "Ciro Gomes-Ciro Gomes",
                videos: []
            },{
                name: "Ciro Gomes Presidente",
                slug: "Ciro Gomes-Ciro Gomes Presidente",
                videos: []
            },{
                name: "Marina Silva",
                slug: "Marina Silva-Marina Silva",
                videos: []
            },{
                name: "Marina Presidente",
                slug: "Marina Silva-Marina Presidente",
                videos: []
            },{
                name: "Henrique Meirelles",
                slug: "Meirelles-Henrique Meirelles",
                videos: []
            },{
                name: "Meirelles Presidente",
                slug: "Meirelles-Meirelles Presidente",
                videos: []
            },{
                name: "Amoêdo",
                slug: "Amoedo-Amoedo",
                videos: []
            },{
                name: "Amoêdo Presidente",
                slug: "Amoedo-Amoedo Presidente",
                videos: []
            },{
                name: "Eleições 2018",
                slug: "Eleicoes-Eleicoes 2018",
                videos: []
            },{
                name: "Brazil Elections",
                slug: "Eleicoes-Brazil Elections",
                videos: []
            },
        ];
        
        // console.log(startPeriod);
        this.selectedTerm = this.terms[0].slug;
        this.initialDate = moment("2018-08-23");
        this.finalDate = moment("2018-09-17");
        this.period = {
            startDate: moment("2018-08-23"), //this.initialDate,
            endDate: this.finalDate
        };
        this.totalNumberDays = this.finalDate.diff(this.initialDate, 'days')+1;
        this.numberDays = this.period.endDate.diff(this.period.startDate, 'days')+1;

        this.topChannels = [];

        //##### METHODS

        this.constructor = function () {

            //temporary hack for a version
            if($("#startPeriod").html()) {
                this.period.startDate = moment($("#startPeriod").html());
                this.numberDays = this.period.endDate.diff(this.period.startDate, 'days')+1;
            }

            this._loadData();
        };

        this._loadData = function () {

            let maxRankIndex = 10; //max videos on the rank
            let daysLoaded = 0; //start counting
            let dayIterator = moment(this.initialDate);
            let videoID = 0;

            let termVideoCollection = this.getTermByName(this.selectedTerm);
    
            while (dayIterator <= rankflowData.finalDate) {

                
                // let file = `${rankflowData.PATH}ontario-elections-${dayIterator.format('YYYY-MM-DD')}.json`; //get file name
                let file = `${rankflowData.PATH}video-infos-${this.selectedTerm}-${dayIterator.format('YYYYMMDD')}.json`; //get file name

                
    
                $.getJSON(file)
                    .done(function (fileData) {

                    
                        let raw_date = getDateFromFilename(file); //get date from filename
                        let rankIndex = 0; //
                        
                        // transform into an array
                        let arrayFileData = $.map(fileData, function(value, index) {
                            return [value];
                        });
                        
                        //     //sort by reccomedation
                        arrayFileData.sort(function (b, a) {
                            return a.nb_recommendations - b.nb_recommendations;
                        });
        
                        //     // loop through videos - manipulate and add information
                        for (let video of arrayFileData) {
                    
        
                            video.youtubeID = video.id;
                            // video.id = "v" + videoID;
                            video.date = `${raw_date[1]}-${raw_date[2]}-${raw_date[3]}`;
                            video.moment = moment(`${raw_date[1]}-${raw_date[2]}-${raw_date[3]}`);
                            video.recRank = rankIndex + 1;
                            video.day = +raw_date[3];
                            video.id = "_" + video.id;

                            delete video.key;

                            termVideoCollection.videos.push(video);

                            //advance index
                            rankIndex++;
                            videoID++;
        
                        }
        
                        //advance date
                        daysLoaded++;
        
                        //if it is the last day
                        if (daysLoaded == rankflowData.totalNumberDays) {
                            reorderByDate();
                            rankflowData.allFilesLoaded();
                        }
        
                    }).fail( function() {
                        console.log("error");

                        //advance date
                        daysLoaded++;
        
                        //if it is the last day
                        if (daysLoaded == rankflowData.totalNumberDays) {
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
                const regex = /(\d{4})(\d{2})(\d{2})/; // regex find date format "YYYY-MM-DD"
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



            // this.changePeriod(this.selectedTerm,moment('2018-05-09'),this.finalDate);
            this.filterVidesByPeriod(this.selectedTerm,this.period.startDate,this.period.endDate);
            
        };

        this._parseData = function() {

            const _this = this;

            const selectedDataset = this.terms.find(term => term.slug == this.selectedTerm);


            //video collection for this term
            let videos = [];
    
            $.each(selectedDataset.videos, function (i, v) {

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
    
            selectedDataset.videos = videos;

            //Rorder
            selectedDataset.videos.sort(function (b, a) {
                return a.sumRec - b.sumRec;
            });
        
        };

        this.getRankedChannels = function(term) {

            //select term
            let dataSet = this.getTermByName(term);

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


            //add colour based on pallete 
            if (app.channelColours) this._setChannelColour(channels);
            

            //save;
            dataSet.channels = channels;
            return dataSet.channels;
        };

        this._setChannelColour = function(channels) {
            channels.forEach( function(c,i) {

                //top ten color /// more on gray
                if (i < 10) {
                    // c.colour = app.channelColours[i];
                    let colour = checkChannelColour(c.name);
                    if (colour) {
                        c.colour = colour;
                    } else {

                        colour = chroma(app.channelColours[i]).hex();
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


                        rankflowData.topChannels.push(c); 
                    }
                   
                } else {
                    // c.colour = "#ccc";
                    c.colour = chroma("lightgray").hex();
                }

            });

            function checkChannelColour(channelName) {
                const channel = rankflowData.topChannels.find(c => c.name == channelName);
                if (channel) return channel.colour;
                return null;
            }

            function checkColourDuplicationTopTen(colour) {
                const colourChannel = rankflowData.topChannels.find(c => c.colour == colour);
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

        this.filterVidesByPeriod = function(tSlug, start, end) {

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

            //Rorder
            termSelected.filteredPeriod.videos.sort(function (b, a) {
                return a.sumRec - b.sumRec;
            });
            
            //update channel list
            this.getRankedChannels(rankflowData.selectedTerm);

            this.updateData();

        };

        this.selectTerm = function(term) {
            this.selectedTerm = term; //new term
            const termSelected = this.terms.find(term => term.slug == this.selectedTerm);

            $("#current-view").find("#current-tern").html(termSelected.name);

            if(termSelected.videos.length == 0) {
                $(rankflowData).trigger('load');
                this._loadData();
            } else {
                this.updateData();
            }
            
        };

        this.updateData = function() {

            const selectedDataset = this.terms.find(term => term.slug == this.selectedTerm);

            $(rankflowData).trigger('update',[selectedDataset]);

        };

        this.getTermByName = function (termName) {

            // termName = termName.replace(" ", "_"); // replace space with trailing

            for (let i = 0; i < this.terms.length; i++) {
                if (this.terms[i].slug == termName) {
                    return this.terms[i];
                }
            }
            return null;
        };

        this.getChannelByName = function(channelName) {
            const term = this.terms.find(t => t.slug == this.selectedTerm);
            const channel = term.channels.find(c => c.name == channelName);
            return channel;
        };

        this.displayPeriodStartDate = function() {

            return this.period.startDate.locale("pt").format("DD MMMM ");
        };

        this.displayPeriodEndDate = function() {
            return this.period.endDate.locale("pt").format("DD MMMM");
        };
    }

    $(document).ready(function () {
        rankflowData.constructor();
    });

    //init
    window.rankflowData = new RankflowData();

})(window); //Pass in a reference to the global window object