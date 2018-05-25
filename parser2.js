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

        this.selectedTerm = this.terms[0].slug;

        this.initialDate = moment("2018-04-03");
        this.finalDate = moment("2018-05-24");
        this.numberDays = this.finalDate.diff(this.initialDate, 'days');

        //##### METHODS

        this.setInitialDate = function (value) {
            this.initialDate = moment(value);
        };

        this.setFinalDate = function (value) {
            this.finalDate = moment(value);
        };

        /////

        this.loadData = function () {

            let maxRankIndex = 10; //max videos on the rank
            let daysLoaded = 0; //start counting
            let dayIterator = this.initialDate;
            let videoID = 0;

            while (dayIterator <= this.finalDate) {


                let file = `${this.PATH}ontario-elections-${dayIterator.format('YYYY-MM-DD')}.json`; //get file name

                $.getJSON(file, function (fileData) {

                    let raw_date = getDateFromFilename(file); //get date from filename

                    //   loop through terms
                    $.each(fileData, function (term, d) {

                        let termVideoCollection = rankflow.getTermByName(term);
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
                    if (daysLoaded == rankflow.numberDays) {
                        reorderByDate();

                        rankflow.dataIsReady();
                        // console.log(rankflow);

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
                $.each(rankflow.terms, function (i, term) {

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



            // dataIsReady();




        };

        this.getTermByName = function (termName) {

            termName = termName.replace(" ", "_"); // replace space with trailing

            for (let i = 0; i < this.terms.length; i++) {
                if (this.terms[i].slug == termName) {
                    return this.terms[i];
                }
            }
            return null;
        };


        this.getDatasetByTerm = function (termName) {

            termName = termName.replace(" ", "_"); // replace space with trailing

            for (let i = 0; i < this.terms.length; i++) {
                if (this.terms[i].slug == termName) {
                    return this.terms[i];
                }
            }
            return null;
        };

        this.dataIsReady = function() {
        
            setupvis();
            this.parseData();

            builtChart();
        
            buildTopTenTable(this.getDatasetByTerm(this.selectedTerm).videos);
            
            
            console.log(this.getDatasetByTerm(this.selectedTerm).videos);
            // vis(this.getDatasetByTerm(this.selectedTerm).videos);
        
            $('#table-all-toggle-icon').click(toggleTableListAll);
        
            $('#rankflow-panel').scrollLeft(300);
        
        };

        this.parseData = function() {

            $.each(this.terms, function (term, t) {
        
                let videos = [];
        
                $.each(t.videos, function (i, v) {
        
                    let video = checkRecurrency(v, videos);
                    totalRec = 0;
        
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
        
            //init vis
            $(".spiner").hide();
        
            var selectedDataset = this.getTermByName(this.selectedTerm);
        
        
        };


        this.selectTerm = function(term) {

            this.selectedTerm = term;
        
            var selectedDataset = this.getTermByName(this.selectedTerm);
        
            buildTopTenTable(selectedDataset.videos);
            // vis(selectedDataset.videos);
        
            // if (showTableAll) builtTable(selectedDataset.videos);
        
        };


    }

    $(document).ready(function () {
        
        rankflow.loadData();
    });

    window.rankflow = new RankflowData();


})(window); //Pass in a reference to the global window object






function buildTopTenTable(d) {

    var rankedData = d.sort(function (b, a) {
        return a.sumRec - b.sumRec;
    });
    var topTen = rankedData.slice(0, 10);

    var divTable = $('#top-ten-recommendations');
    divTable.empty();

    divTable.append(`<table id="list" class="uk-table uk-table-hover uk-table-divider">`);

    var table = $(divTable.find('#list'));

    var tableHead = `<thead>
		<tr>
			<th class="uk-table-shrink">&nbsp;</th>
			<th class="">Title</th>
            <th class="">Channel</th>
            <th class="uk-table-shrink uk-text-right">Views</th>
            <th class="uk-table-shrink uk-text-right">Likes</th>
            <th class="uk-table-shrink uk-text-right">Dislikes</th>
			<th class="uk-table-shrink uk-text-right">Reccomendations</th>
		</tr>
    </thead>
    <tbody>
    </tbody>`;

    table.append(tableHead);

    var tableBody = table.find('tbody');

    var tableInfo = '';



    $.each(topTen, function (i, d) {

        tableInfo += `<tr id='${d.id}' class='table-row'>
            <td class="">${i+1}</td>
			<td class=""><a href='https://www.youtube.com//watch?v=${d.youtubeID}' target='_blank'>${d.title}</a></td>
            <td class="">${d.channel}</td>
            <td class="uk-text-right">${d.dates[d.dates.length-1].views}</td>
            <td class="uk-text-right">${d.dates[d.dates.length-1].likes}</td>
            <td class="uk-text-right">${d.dates[d.dates.length-1].dislikes}</td>
            <td class="uk-text-right">${d.sumRec}</td>
		</tr>`;
    });

    tableBody.append(tableInfo);

    var tableRow = table.find('.table-row');

    tableRow.mouseover(function (d) {
        var t = $(this);
        highlightOn(t.attr('id'));
    });

    tableRow.mouseout(function (d) {
        var t = $(this);
        highlightOff(t.attr('id'));
    });

    tableRow.click(function (d) {

        var t = $(this);
        var data = getFlatDataById(t.attr('id'));

        if (data != null) showDetails(data);
    });

}

function builtTable(d) {
    var rankedData = d.sort(function (b, a) {
        return a.sumRec - b.sumRec;
    });

    var divTable = $('#vis_table');
    divTable.empty();

    divTable.append(`<table id="list" class="uk-table uk-table-hover uk-table-divider">`);

    var table = $(divTable.find('#list'));

    var tableHead = `<thead>
		<tr>
			<th class="uk-table-shrink">&nbsp;</th>
			<th class="">Title</th>
            <th class="">Channel</th>
            <th class="uk-table-shrink uk-text-right">Views</th>
            <th class="uk-table-shrink uk-text-right">Likes</th>
            <th class="uk-table-shrink uk-text-right">Dislikes</th>
			<th class="uk-table-shrink uk-text-right">Reccomendations</th>
		</tr>
    </thead>
    <tbody>
    </tbody>`;

    table.append(tableHead);

    var tableBody = table.find('tbody');

    var tableInfo = '';

    $.each(rankedData, function (i, d) {

        tableInfo += `<tr id='${d.id}' class='table-row'>
            <td class="">${i+1}</td>
			<td class=""><a href='https://www.youtube.com//watch?v=${d.youtubeID}' target='_blank'>${d.title}</a></td>
            <td class="">${d.channel}</td>
            <td class="uk-text-right">${d.dates[d.dates.length-1].views}</td>
            <td class="uk-text-right">${d.dates[d.dates.length-1].likes}</td>
            <td class="uk-text-right">${d.dates[d.dates.length-1].dislikes}</td>
            <td class="uk-text-right">${d.sumRec}</td>
		</tr>`;
    });

    tableBody.append(tableInfo);

    var tableRow = table.find('.table-row');

    tableRow.mouseover(function (d) {
        var t = $(this);
        highlightOn(t.attr('id'));
    });

    tableRow.mouseout(function (d) {
        var t = $(this);
        highlightOff(t.attr('id'));
    });

    tableRow.click(function (d) {

        var t = $(this);
        var data = getFlatDataById(t.attr('id'));

        if (data != null) showDetails(data);
    });

}