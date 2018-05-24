/*jshint esversion: 6 */

var data = [];
var dataset = [];

var selecteTerm = "kathleen_wynne";
// var selecteTerm = "doug_ford";

var PATH = "data/";     // Define files paths

var showTableAll = false;
var showMethodology = false;
var showScrollHint = false;


var terms = [
    // {name:"Ontario Politics",slug:"ontario_politics"},
    // {name:"Ontario Elections",slug:"ontario_elections"},
    {name:"Kathleen Wynne",slug:"kathleen_wynne"},
    {name:"Doug Ford",slug:"doug_ford"},
    {name:"Andrea Horwath",slug:"andrea_horwath"},
    {name:"Mike Schreiner",slug:"mike_schreiner"}
];

console.log("oi");

var dates = ["2018-04-03",
            "2018-04-04",
            "2018-04-05",
            "2018-04-06",
            "2018-04-07",
            "2018-04-08",
            "2018-04-09",
            "2018-04-10",
            "2018-04-11",
            "2018-04-12",
            "2018-04-13",
            "2018-04-14",
            "2018-04-15",
            "2018-04-16",
            "2018-04-17",
            "2018-04-18",
            "2018-04-19",
            "2018-04-20",
            "2018-04-21",
            "2018-04-22",
            "2018-04-23",
            "2018-04-24",
            "2018-04-25",
            "2018-04-26",
            "2018-04-27",
            "2018-04-28",
            "2018-04-29",
            "2018-04-30",
            "2018-05-01",
            "2018-05-02",
            "2018-05-03",
            "2018-05-04",
            "2018-05-05",
            "2018-05-06",
            "2018-05-07",
            "2018-05-08",
            "2018-05-09",
            "2018-05-10",
            "2018-05-11",
            "2018-05-12",
            "2018-05-13",
            "2018-05-14",
            "2018-05-15",
            "2018-05-16",
            "2018-05-17",
            "2018-05-18",
            "2018-05-19",
            "2018-05-20",
            "2018-05-21",
            "2018-05-22",
            "2018-05-23"
        ];        

$( document ).ready(function() {
    loadData();
    setupvis();

    $('#methodology-toggle-icon').click(toggleMethodology);

    UIkit.toggle($("#small-title"),{mode: 'media', animation:'uk-animation-fade,uk-animation-fade'});

    UIkit.toggle($("#horizontal-scroll-hint"),{mode: 'media', animation:'uk-animation-fade,uk-animation-fade'});
    $("#horizontal-scroll-hint").on('show', function () { showScrollHint = true; });
    $("#horizontal-scroll-hint").on('hide', function () { showScrollHint = false; });


    $("#menu-section").on('active', function () {
       
        UIkit.toggle($("#small-title")).toggle();
    });
    $("#menu-section").on('inactive', function () {
        UIkit.toggle($("#small-title")).toggle();
    });
});

function toggleTableListAll() {
    showTableAll = !showTableAll;

    var icon;

    if (showTableAll) {
        icon = 'minus-circle';
        builtTable(selectedDataset.videos);
    } else {
        icon = 'plus-circle';
    }
        

    UIkit.icon('#table-all-toggle-icon', {icon: icon});
        
}

function toggleMethodology() {
    showMethodology = !showMethodology;

    var icon;

    if (showMethodology) {
        icon = 'minus-circle';
    } else {
        icon = 'plus-circle';
    }
        

    UIkit.icon('#methodology-toggle-icon', {icon: icon});
        
}


function dataIsReady() {
    console.log(data);

    setupvis();
    parseData(data);

    builtChart();

    buildTopTenTable(selectedDataset.videos);

    vis(selectedDataset.videos);

    $('#table-all-toggle-icon').click(toggleTableListAll);

    // $('#rankflow-panel').scrollLeft(300);
    
}

function loadData() {
    
    var rankData = {};      // Dataset Objec
    var maxRankIndex = 10; //max videos on the rank
    var day = 0;            //start counting
    var videoID = 0;
    
    //look through dates on the dataset
    dates.forEach(function (date) {

        var file = `${PATH}ontario-elections-${date}.json`; //get file name

        //load file
        $.getJSON(file, function( fileData ) {

            // console.log(fileData);

            var raw_date = getDateFromFilename(file); //get date from filename

            // loop through terms
            $.each(fileData, function(term, d) {

                term = term.replace(" ","_"); // replace space with trailing

                var termData = getDatasetByTerm(term);

                if (termData == null) {
                    termData = {
                        term: term,
                        videos: []
                    };
                    data.push(termData);
                }

                var rankIndex = 0; //

                d.sort(function(b, a){return a.nb_recommendations - b.nb_recommendations;});

                //loop through videos
                $.each(d, function(i,video) {

                    video.youtubeID = video.id;
                    video.id = "v"+videoID;
                    video.date = raw_date[0];
                    video.moment = moment(raw_date[0]);
                    video.recRank = i+1;
                    video.day = +raw_date[3];
                    termData.videos.push(video);

                    //advance index
                    rankIndex++;
                    videoID++;
                });

                
                
            });

            //advance date
            day++;

            //if it is the last day
            if (day == dates.length) {
                reorderByDate();
                dataIsReady();
            }
    
        });
 
    });

    function getDateFromFilename(file) {

        //get date from filename
        var regex = /(\d{4})-(\d{2})-(\d{2})/; // regex find date format "YYYY-MM-DD"
        var raw_date = file.match(regex);
        //var dateMoment = moment(raw_date[0]); // Moment objects
    
        return raw_date;
    }

    function reorderByDate() {
        /*loading files assyncroniously can make data be placed in diferent order
        this fuctioon order the data by date (alphabetically)*/
        $.each(data, function(i, term) {

            term.videos.sort(function(a, b) {
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

function getDatasetByTerm(termName) {
    
    for (var i=0; i<data.length; i++) {
        if (data[i].term == termName) {
            return data[i];
        }
    }
    return null;
}

function parseData() {

    $.each(data, function(term, t) {

        var videos = [];

        $.each(t.videos, function(i, v) {

            var video = checkRecurrency(v,videos);
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

            var day = {
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

    function checkRecurrency(video,list) {

        for (var i=0; i<list.length; i++) {
            if (list[i].youtubeID == video.youtubeID) {
                return list[i];
            }
        }
    
        return null;
    
    }

    //init vis
    $(".spiner").hide();

    selectedDataset = getDatasetByTerm(selecteTerm); 
}

function selectTerm(term) {

    selecteTerm = term;

    var selectedDataset = getDatasetByTerm(selecteTerm);

    buildTopTenTable(selectedDataset.videos);
    vis(selectedDataset.videos);

    if(showTableAll) builtTable(selectedDataset.videos);
    
}

function buildTopTenTable(d) {

    var rankedData = d.sort(function(b, a){return a.sumRec - b.sumRec;});
    var topTen = rankedData.slice(0,10);

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
    
    

	$.each(topTen, function(i,d) {

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

    tableRow.mouseover(function(d) {
        var t = $(this);
        highlightOn(t.attr('id'));
    });

    tableRow.mouseout(function(d) {
        var t = $(this);
        highlightOff(t.attr('id'));
    });

    tableRow.click(function(d) {

        var t = $(this);
        var data = getFlatDataById(t.attr('id'));

        if (data != null) showDetails(data);
    });

}

function builtTable(d) {
    var rankedData = d.sort(function(b, a){return a.sumRec - b.sumRec;});

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

	$.each(rankedData, function(i,d) {

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

    tableRow.mouseover(function(d) {
        var t = $(this);
        highlightOn(t.attr('id'));
    });

    tableRow.mouseout(function(d) {
        var t = $(this);
        highlightOff(t.attr('id'));
    });

    tableRow.click(function(d) {

        var t = $(this);
        var data = getFlatDataById(t.attr('id'));

        if (data != null) showDetails(data);
    });

}