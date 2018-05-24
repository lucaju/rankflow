/*jshint esversion: 6 */

var data = [];
var dataset = [];

var selecteTerm = "ontario_politics";

var PATH = "../data/";     // Define files paths


var terms = [
    {name:"Ontario Politics",slug:"ontario_politics"},
    {name:"Ontario Elections",slug:"ontario_elections"},
    {name:"Kathleen Wynne",slug:"kathleen_wynne"},
    {name:"Doug Ford",slug:"doug_ford"},
    {name:"Andrea Horwath",slug:"andrea_horwath"},
    {name:"Mike Schreiner",slug:"mike_schreiner"}
];

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

var options = {
    rankFlow: true,
    networkGraph: false
};
            

$( document ).ready(function() {
    parseData();
});


function parseData() {
    
    var rankData = {};      // Dataset Objec
    var maxRankIndex = 30; //max videos on the rank
    var day = 0;            //start counting
    
    //look through dates on the dataset
    dates.forEach(function (date) {

        var file = `${PATH}ontario-elections-${date}.json`; //get file name

        //load file
        $.getJSON(file, function( data ) {
            
            var raw_date = getDateFromFilename(file); //get date from filename

            // loop through terms
            $.each(data, function(term, d) {
                
                term = term.replace(" ","_"); // replace space with trailing
                
                if (!rankData.hasOwnProperty(term)) rankData[term] = []; // create new property: term [key]: eankList[array]
    
                var rankIndex = 0; //
                
                //loop through videos
                $.each(d, function(i,video) {

                    // limit on the max ranking index
                    if (rankIndex<maxRankIndex) {

                        if(rankData[term][rankIndex] == undefined) rankData[term][rankIndex] = {}; //crate new object to store cronological data for the rank
                        
                        if (video.views == -1) video.views = 0; //When videos are LIVE they don't recordnumber of views. Change to 0 to avoid distortion in the graph

                        //save variables
                        rankData[term][rankIndex][`${date}-videos`] = video.title;
                        rankData[term][rankIndex][`${date}-views`] = video.views;
                        
                        //advance index
                        rankIndex++;

                    }
    
                });

            });

            //advance date
            day++;

            //if it is the last day
            if (day == dates.length) {
                
                //reorder properties (assincronously load files can make the propery yo be load out of crononogical order)
                var reorderedRankData = reorderRankData(rankData);
                dataset = reorderedRankData;
                // console.log(reorderedRankData);

                //download data
                //downloadRankData();

                selectTerm(selecteTerm);

                $("#spiner").hide();
            }
    
    
        });


    });
    
}


function getDateFromFilename(file) {

    //get date from filename
    var regex = /(\d{4})-(\d{2})-(\d{2})/; // regex find date format "YYYY-MM-DD"
    var raw_date = file.match(regex);
    //var dateMoment = moment(raw_date[0]); // Moment objects

    return raw_date;
}

/*loading files assyncroniously can make data be placed in diferent order
this fuctioon order the data by date (alphabetically)*/
function reorderRankData(rankData) {
    
    var reorderedRank = {}; //nem objects

    // loop the tems
    $.each(rankData, function(term, list) {

        // create terms in the ordered db
        if (!reorderedRank.hasOwnProperty(term)) reorderedRank[term] = [];

        // look throug the list
        $.each(list, function(i, data) {

            //create positions
            if(reorderedRank[term][i] == undefined) reorderedRank[term][i] = {};

            //reordered data objects
            var orderedRankData = {};

            //reorder
            Object.keys(data).sort().forEach(function(key) {
                reorderedRank[term][i][key] = data[key];
            });

        });

    });

    //return new reordered dataset
    return reorderedRank;

}

function downloadRankData() {
    
    var zip = new JSZip(); //create zipobject

    //look through terms: one file per term
    $.each(dataset, function(term, d) {

        console.log(term,d);

        //CSV - options
        var csvOptions = {
            delimiter: "\t" // [",",";","\t"]
        };

        //make CSV
        var nodesCSV = Papa.unparse(d, csvOptions);

        zip.file(`${term}.csv`,nodesCSV); //zip file

        console.log(nodesCSV);

    });

    //download - save
    zip.generateAsync({type : "blob"})
        .then(function (blob) {
            saveAs(blob, "Ontario_elections_youtube_data.zip");
        });

    console.log(dataset);

}

function selectTerm(term) {

    selecteTerm = term;

    var termData = dataset[term];

    //CSV - options
    var csvOptions = {
        delimiter: "\t" // [",",";","\t"]
    };

    var termCSV = Papa.unparse(termData, csvOptions);

    getPaste(termCSV);

}
