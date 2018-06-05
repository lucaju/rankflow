/*jshint esversion: 6 */

(function (window) {

    function App() {

        this.showTableAll = false;
        this.showMethodology = false;
        this.showScrollHint = false;


        this.constructor = function () {

            const _this = this;

            console.log(rankflowData);

            $('#methodology-toggle-icon').click(_this.toggleMethodology);

            UIkit.toggle($("#small-title"), {
                mode: 'media',
                animation: 'uk-animation-fade,uk-animation-fade'
            });

            UIkit.toggle($("#horizontal-scroll-hint"), {
                mode: 'media',
                animation: 'uk-animation-fade,uk-animation-fade'
            });
            $("#horizontal-scroll-hint").on('show', function () {
                _this.showScrollHint = true;
            });
            $("#horizontal-scroll-hint").on('hide', function () {
                _this.showScrollHint = false;
            });


            $("#menu-section").on('active', function () {
                UIkit.toggle($("#small-title")).toggle();
            });
            $("#menu-section").on('inactive', function () {
                UIkit.toggle($("#small-title")).toggle();
            });

            $(rankflowData).on('load', function () {
                $("#visualization").empty();
                $("#top-ten-videos").empty();
                $("#top-ten-channels").empty();
                $(".spiner").show();
            });

            $(rankflowData).on('success', function () {

                //vis


                //interface
                // $('#table-all-toggle-icon').click(_this.toggleTableListAll);
                $('#rankflow-panel').scrollLeft(300);

                $(".spiner").hide();
            });

            $(rankflowData).on('update', {
                data: Object
                }, function (e, data) {

                    rankFlowVis.setupvis();
                    rankFlowVis.builtChart();
                    rankFlowVis.vis(data.filteredPeriod);

                    _this.buildTopTenTable(data.filteredPeriod); //buld table        

                    if (_this.showTableAll) _this.builtTable(data.filteredPeriod);

                    // console.log(data);
                    topVideosVis.init(data.filteredPeriod);
                    topChannelsVis.init(data.channels);

                    //update html
                    let html = rankflowData.displayPeriodStartDate() + " to " + rankflowData.displayPeriodEndDate();
                    
                    $("#data-range").find("p").html(html);
                });

        };

        this.toggleTableListAll = function() {

            app.showTableAll = !app.showTableAll;

            let icon;

            if (app.showTableAll) {
                icon = 'minus-circle';
                app.builtTable(selectedDataset.videos);
            } else {
                icon = 'plus-circle';
            }

            UIkit.icon('#table-all-toggle-icon', {
                icon: icon
            });

        };

        this.toggleMethodology = function() {
            app.showMethodology = !app.showMethodology;

            let icon;

            if (app.showMethodology) {
                icon = 'minus-circle';
            } else {
                icon = 'plus-circle';
            }

            UIkit.icon('#methodology-toggle-icon', {
                icon:"minus-circle"
            });

        };

        this.buildTopTenTable = function(data) {

            

            // let rankedData = d.sort(function (b, a) {
            //     return a.sumRec - b.sumRec;
            // });
            let topTen = data.videos.slice(0, 10);

            console.log(topTen);

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

                let data = rankFlowVis.getFlatDataById(t.attr('id'));

                if (data != null) rankFlowVis.showDetails(data.data);
            });

        };

        this.builtTable = function(d) {
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
                rankFlowVis.highlightOn(t.attr('id'));
            });

            tableRow.mouseout(function (d) {
                var t = $(this);
                rankFlowVis.highlightOff(t.attr('id'));
            });

            tableRow.click(function (d) {

                var t = $(this);
                var data = rankFlowVis.getFlatDataById(t.attr('id'));

                if (data != null) rankFlowVis.showDetails(data.data);
            });

        };

    }

    $(document).ready(function () {
        app.constructor();
    });

    //init
    window.app = new App();

})(window); //Pass in a reference to the global window object