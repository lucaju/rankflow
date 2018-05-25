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