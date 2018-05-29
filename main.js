/*jshint esversion: 6 */

var showTableAll = false;
var showMethodology = false;
var showScrollHint = false;

$( document ).ready(function() {

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

    console.log(rankflowData);

    $(rankflowData).on('success',function() {

        //vis
        rankFlowVis.setupvis();
        rankFlowVis.builtChart();

        //interface
        $('#table-all-toggle-icon').click(toggleTableListAll);                    
        $('#rankflow-panel').scrollLeft(300);

        $(".spiner").hide();
    });

    $(rankflowData).on('update',{data:Object},function(e,data) {
        
        rankFlowVis.vis(data.videos);
        
        buildTopTenTable(data.topTenVideos);  //buld table        
        
        if (showTableAll) builtTable(data.videos);
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


function buildTopTenTable(topTen) {

    // let rankedData = d.sort(function (b, a) {
    //     return a.sumRec - b.sumRec;
    // });
    // var topTen = rankedData.slice(0, 10);

    let divTable = $('#top-ten-recommendations');
    divTable.empty();

    divTable.append(`<table id="list" class="uk-table uk-table-hover uk-table-divider">`);

    let table = $(divTable.find('#list'));

    let tableHead = `<thead>
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

    let tableBody = table.find('tbody');

    let tableInfo = '';



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

    let tableRow = table.find('.table-row');

    tableRow.mouseover(function (d) {
        let t = $(this);
        rankFlowVis.highlightOn(t.attr('id'));
    });

    tableRow.mouseout(function (d) {
        let t = $(this);
        rankFlowVis.highlightOff(t.attr('id'));
    });

    tableRow.click(function (d) {

        let t = $(this);
        let data = getFlatDataById(t.attr('id'));

        if (data != null) showDetails(data);
    });

}

function builtTable(d) {
    let rankedData = d.sort(function (b, a) {
        return a.sumRec - b.sumRec;
    });

    let divTable = $('#vis_table');
    divTable.empty();

    divTable.append(`<table id="list" class="uk-table uk-table-hover uk-table-divider">`);

    let table = $(divTable.find('#list'));

    let tableHead = `<thead>
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

    let tableBody = table.find('tbody');

    let tableInfo = '';

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

    let tableRow = table.find('.table-row');

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