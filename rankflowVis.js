/*jshint esversion: 6 */

var windowWidth;
var resizeTimer;

var margin, width, height;

var visDataset = [];
var allVideosIDs = [];
var namesByID = [];

var flatData = [];

var topN = 5;

var strokeWidth = [8,6,5,5,4,4,3,3,2,2]; //Stroke width per max position

var color;
var xScale, yscale;
var xAxis, yAxis;

var line;

var focus, focusData;
var voronoi, voronoiGroup;

var popUpName;

var parseTime;

var minDateWidth = 35;

$( document ).ready(function() {

	windowWidth = document.body.clientWidth;

	//set the context in the DOM
	margin = {top: 20, right: 30, bottom: 30, left: 50};
	height = 470 - margin.top - margin.bottom;

	var minVizWidth = (dates.length * minDateWidth) + margin.left + margin.right - 10;
	
	if(windowWidth < minVizWidth) {
		width = minVizWidth - margin.left - margin.right - 10;
	} else {
		width = (windowWidth-140) - margin.left - margin.right - 10;
	}
	

});

$( window ).resize(function() {

	//width only
	if (windowWidth != document.body.clientWidth) {

		//delauy... end resizing
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
	  
			windowWidth = document.body.clientWidth;

			var minVizWidth = (dates.length * minDateWidth) + margin.left + margin.right - 10;

	
			if(windowWidth < minVizWidth) {
				width = minVizWidth - margin.left - margin.right - 10;
				if(!showScrollHint) UIkit.toggle($("#horizontal-scroll-hint")).toggle();
			} else {
				width = (windowWidth-140) - margin.left - margin.right - 10;
				if(showScrollHint) UIkit.toggle($("#horizontal-scroll-hint")).toggle();
			}
	
			setupvis();
			builtChart();
			vis(selectedDataset.videos);
				  
		}, 250);
		
	}

	
});

function setupvis() {

	parseTime = d3.timeParse("%Y-%m-%d");

	///////////////////// COLOR ////////////////////////// 
	// color = d3.scaleOrdinal()
	// 		.range(["#FFC600", "#FEC606", "#FEC60B", "#FDC710", "#FDC716", "#FCC61B", "#FCC61F", "#FCC523", "#FBC427", 
	// 		"#FBC22B", "#FBC02D", "#FBBD2F", "#FBBA31", "#FBB632", "#FBB132", "#FCAC31", "#FCA730", "#FDA12F", "#FD9B2D", 
	// 		"#FE952C", "#FE8F2A", "#FF8929", "#FF8428", "#FF7E27", "#FF7927", "#FF7527", "#FF7128", "#FE6E29", "#FE6A2B", 
	// 		"#FD682D", "#FC652F", "#FB6330", "#FA6032", "#F95E33", "#F85C34", "#F65A34", "#F55733", "#F35432", "#F15230", 
	// 		"#F04F2D", "#EE4B2A", "#EC4827", "#EA4524", "#E84221", "#E63E1F", "#E43B1D", "#E2381C", "#E0351C", "#DD321E", 
	// 		"#DB3020", "#D92E25", "#D62C2B", "#D42A31", "#D22939", "#CF2841", "#CD274A", "#CB2754", "#C8275D", "#C62866", 
	// 		"#C4296F", "#C22A77", "#BF2C7F", "#BD2E86", "#BB308C", "#B93391", "#B73596", "#B5389A", "#B33B9D", "#B13EA0", 
	// 		"#AE41A2", "#AC43A3", "#A946A4", "#A648A4", "#A349A4", "#9F4AA3", "#9B4BA2", "#974BA1", "#934B9F", "#8E4A9D", 
	// 		"#8A499A", "#854897", "#804795", "#7B4692", "#76448E", "#71438B", "#6C4188"]);

	color = d3.scaleOrdinal(d3.schemePaired);


	///////////////////// SCALE & AXES ////////////////////////// 

	var parsedDates = [];
	$.each(dates, function(i,d) {
		parsedDates.push(parseTime(d));
	});
	

	// var startDay = parseTime(dates[0]);
	// var endDay = parseTime(dates[dates.length-1]);

	// xScale = d3.scaleTime().domain([startDay, endDay]).range([40, width-40]);
	xScale = d3.scaleTime().range([40, width-40]);
	xScale.domain(d3.extent(parsedDates,function(d) { return d; }));

	yScale = d3.scaleLinear().domain([0.5,10.5]).range([0, height]);

	// xAxis = d3.axisBottom().scale(xScale).tickFormat(d3.timeFormat("%b %d")).tickSize(0);
	xAxis = d3.axisBottom(xScale).scale(xScale).tickFormat(d3.timeFormat("%m/%d")).ticks(20).tickSize(0);
	// xAxis = d3.axisBottom(xScale).scale(xScale).tickFormat(d3.timeFormat("%a %d")).tickSize(0);
	yAxis = d3.axisLeft().scale(yScale).tickSize(0);


	///////////////////// LINE TYPE  //////////////////////////
	line = d3.line()
		// .curve(d3.curveMonotoneX) //Slight rounding without too much deviation
		.curve(d3.curveStep); //Slight rounding without too much deviation

}

//////////////////////// Create CHART //////////////////////// 
function builtChart() {

	//clear
	$("#visualization").empty();

	////////////////////////  Create focus SVG
	focus = d3.select("#visualization").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	//Append clippath to focus chart
	var defs = focus.append("defs");
	
	defs.append("clipPath")
		.attr("id", "clip")
		.append("rect")
		.attr("width", width)
		.attr("height", height);

	//Append x axis to focus chart	
	focus.append("g")
		.attr("class", "x axis")
		.style("font-size", 13)
		.attr("transform", "translate(0," + (height + 9) + ")")
		// .call(d3.axisBottom(xScale));
		.call(xAxis);
	
	//Append y axis to focus chart	
	focus.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(-10,0)")
		.call(yAxis)
		.append("text")
		.attr("class", "titles")
		.attr("transform", "rotate(-90)")
		.attr("x", -(height/2))
		.attr("y", -35)
		.attr("dy", ".71em")
		.style("font-size", 14)
		.style("text-anchor", "middle")
		.text("Position in Top 10");


	//////////////////////// Initiate the voronoi function ///////////////////////////// 
	voronoi = d3.voronoi()
				.extent([[-margin.left, -margin.top], [width + margin.right, height + margin.bottom]]);

	//Initiate the voronoi group element	
	voronoiGroup = focus.append("g")
		.attr("class", "voronoi");


	//////////////////////// Tooltip ///////////////////////////// 
	popUpName = focus.append("g")
		.attr("transform", "translate(-100,-100)")
		.attr("class", "popUpName")
		.style("pointer-events", "none");

	popUpName.append("circle")
		.attr("class", "tooltipCircle")
		.attr("r", 30.5);

	popUpName.append("text")
		.style("font-size", 12)
		.attr("class", "titles")
		.attr("y", -15);

}

//////////////////////// Reduce dataset to TOP N
function reduceToTopN(data) {

	var array = [];

	// reduce: find top 10
	data.forEach(function(t,i) {

		var isTopN = false;

		t.dates.forEach(function(d,j) {
			if(d.recRank <= topN) {
				isTopN = true;
				return;
			}
		});

		if(isTopN) array.push(t);
		
	});

	return array;
	
}


//////////////////////// UPDATE VIS
function vis(data) {

	visDataset = [];
	allVideosIDs = [];
	channels = [];
	namesByID = [];

	//reduce and load dataset
	visDataset = reduceToTopN(data,1);

	/////////////////////  gather data
	visDataset.forEach(function(d,i) {
		allVideosIDs[i] = d.id;
		namesByID[d.id] = i;
		saveChannel(d.channel);
	});

	// SAVE a list of Channels
	function saveChannel(channel) {
		var hasChannel = false;
		channels.forEach(function(c) {
			if(c == channel) hasChannel = true;
		});

		if(!hasChannel) {
			channels.push(channel);
		}
	}

	///////////////////// redefine color
	// color.domain(allVideosIDs);
	color.domain(channels);

	///////////////////// Line type: Change data ////////////////////////// 
	line.x(function(d) { return xScale(parseTime(d.date)); })
		.y(function(d) { return yScale(d.recRank); });


	///////////////////////// Voronoi //////////////////////////// 

	//Create a flat data version for the Voronoi
	/*************************************************************/
	flatData = [];
	for (var k in visDataset) {
			var k_data = visDataset[k];
			k_data.dates.forEach(function(d) {
				if (d.recRank <= 10) flatData.push(
													{id: k_data.id,
													title: k_data.title,
													date: d.date,
													moment: d.moment,
													channel: k_data.channel,
													nb_recommendations: d.nb_recommendations,
													sumRec: k_data.sumRec,
													recRank: d.recRank,
													data: k_data});                              
													});
	}

	//Max position
	var maxPosition = d3.nest()
		.key(function(d) { return d.id; })
		.rollup(function(d) {return d3.min(d, function(g) {return g.recRank;});})
		// .rollup(function(d) {return d3.max(d, function(g) {return g.sumRec;});})
		.entries(flatData);
		
	var nestedFlatData = d3.nest().key(function(d) { return d.id; }).entries(flatData);
	/*************************************************************/

	///////////////////////// Reinitiate the voronoi function
	voronoi.x(function(d) { return xScale(parseTime(d.date)); })
		   .y(function(d) { return yScale(d.recRank); });

	
	// DRAW VORONOI
	var voronoiGrid = voronoiGroup.selectAll("path")
		.data(voronoi.polygons(flatData.filter(function(d) {return parseTime(d.date) >= xScale.domain()[0] &  parseTime(d.date) <= xScale.domain()[1]; })));

	voronoiGrid.exit().remove();

	voronoiGrid.enter().append("path")
		.attr("d", function(d) { return "M" + d.join("L") + "Z"; })
		.datum(function(d) { return d.data; })
		.attr("class", "voronoiCells")
		.on("mouseover", mouseover)
		.on("mouseout", mouseout)
		.on("click", mouseClick);

	voronoiGrid.attr("d", function(d) { return "M" + d.join("L") + "Z"; })
		.datum(function(d) { return d.data; })
		.on("mouseover", mouseover)
		.on("mouseout", mouseout)
		.on("click", mouseClick);


	//Move selected element to the front
	d3.selection.prototype.moveToFront = function() {
		return this.each(function(){
			this.parentNode.appendChild(this);
		});
	};


	//////////////////////// Create PLOT //////////////////////// 
	//data
	focusData = focus.selectAll(".focus")
		.data(visDataset);

	//remove previous
	focusData.exit().remove();

	//add news
	var newDataPoints = focusData.enter().append("g")
		.attr("class", function(d) {return "focus " + d.id;});

	d3.selectAll(".focus")
		.attr("class", function(d) {return "focus " + d.id;});
	
	//LINES
	var pathLine = newDataPoints.append("path")
		.attr("class", "line")
		.attr("clip-path", "url(#clip)")
		.style("pointer-events", "none")
		.style("stroke-linejoin", "round")
		.style("opacity", 0)
		.attr("d", function(d) { return line(d.dates); })
		// .style("stroke-width", function(d) {return 4;})
		.style("stroke-width", function(d) {return strokeWidth[maxPosition[namesByID[d.id]].value-1];})
		// .style("stroke-width", function(d) {return maxPosition[namesByID[d.id]].value/10;})
		.style("stroke", function(d,i) {return color(d.channel); })
		// .style("stroke", function(d,i) {return "#000"; })
		// .transition().duration(750).delay(500)
		.transition().duration(750).delay(function(d,i) { return i*100;})
			.style("opacity", 0.6);

	pathLine = focusData.select("path");

	pathLine.transition()
		.duration(2000).delay(1500)
		.attr("d", function(d) { return line(d.dates); })
		// .style("stroke-width", function(d) {return 4;})
		.style("stroke-width", function(d) {return strokeWidth[maxPosition[namesByID[d.id]].value-1];})
		// .style("stroke-width", function(d) {return maxPosition[namesByID[d.id]].value/10;})
		.style("stroke", function(d,i) {return color(d.channel); });


	//CIRCLE
	var circles = newDataPoints.append("circle")
		.attr("class", "circle")
		.attr("clip-path", "url(#clip)")
		.attr("cx", function(d) { return xScale(parseTime(d.dates[0].date)); })
		.attr("cy", function(d) { return yScale(d.dates[0].recRank); })
		.style("opacity", 0)
		.style("stroke", function(d,i) {return color(d.channel); })
		.style("fill", function(d,i) {
			if(d.dates[0].views == -1) {
				return "white"; 
			} else {
				return color(d.channel); 
			}
		})
		.style("stroke-width", 4)
		// .attr("r", 10)
		.attr("r", function(d) {return strokeWidth[maxPosition[namesByID[d.id]].value-1];})
		.transition().duration(750).delay(function(d,i) { return i*100;})
		.style("opacity", 1);

	circles = focusData.select("circle");

	circles.transition()
		.duration(2000).delay(1500)
		.attr("cx", function(d) { return xScale(parseTime(d.dates[0].date)); })
		.attr("cy", function(d) { return yScale(d.dates[0].recRank); })
		.attr("r", function(d) {return strokeWidth[maxPosition[namesByID[d.id]].value-1];})
		.style("stroke", function(d,i) {return color(d.channel); })
		.style("fill", function(d,i) {
			if(d.dates[0].views == -1) {
				return "white"; 
			} else {
				return color(d.channel); 
			}
		});

}

function getFlatDataById(id) {

	// $.each(flatData,function(i,d) {
	// 	console.log(d.id,id,d.id==id);
	// 	if(d.id == id) return d;
	// });

	for(var i=0; i < flatData.length; i++) {
		if(flatData[i].id == id) return flatData[i];
	}

	return null;
}

///////////////////////// Voronoi mouseover and mouseout functions	
function mouseover(d) {
	// focus.selectAll(".focus").style("opacity", 0.07);
	// focus.selectAll("."+d.id).style("opacity", 1);

	highlightOn(d.id);
	
	d3.select(".popUpName").moveToFront(); //Move the tooltip to the front
	
	popUpName.attr("transform", "translate(" + xScale(parseTime(d.date)) + "," + yScale(d.recRank) + ")"); //Change position, size of circle and text of tooltip

	// var circleSize = parseInt(d3.selectAll(".focus." + d.id).selectAll(".line").style("stroke-width"));
	var circleSize = 10;

	popUpName.select(".tooltipCircle").style("fill", color(d.channel)).attr("r", circleSize);
	// popUpName.select(".tooltipCircle").style("fill", "#000").attr("r", circleSize);

	popUpName.select("text").text(d.moment.format("MMM D")+": "+d.title+" (Rank: "+ d.recRank+")");

	//fix popuop position if text is out of boundaries to tlef or ti the right
	if ((popUpName.node().getCTM().e - margin.left) - (popUpName.node().getBBox().width/2) < 0 ) {
		popUpName.select("text").style('text-anchor', 'start');
	} else if ((popUpName.node().getCTM().e - margin.left) + (popUpName.node().getBBox().width/2) > width) {
		popUpName.select("text").style('text-anchor', 'end');
	}

}

function mouseout(d) {
	highlightOff(d.id);
}

function highlightOn(id) {
	focus.selectAll(".focus").style("opacity", 0.07);
	focus.selectAll("."+id).style("opacity", 1);
}

function highlightOff(id) {
	focus.selectAll(".focus").style("opacity", 1);
	popUpName.attr("transform", "translate(-100,-100)");
	popUpName.select("text").style('text-anchor', 'middle');
}


///////////////////////// VORONOI CLICK - ADD MODAL
function mouseClick(d) {
	showDetails(d);
}

function showDetails(d) {

	var html = `<div class="uk-modal-dialog">
		<button class="uk-modal-close-default" type="button" uk-close></button>
		<div class="uk-modal-header uk-background-muted">
			<div class="uk-grid-small uk-flex-middle" uk-grid>
				<!-- <div class="uk-width-auto">
					<img class="uk-border-circle" width="40" height="40" src="../docs/images/avatar.jpg">
				</div> -->
				<div class="uk-width-expand">
					<h3 class="uk-card-title uk-margin-remove-bottom">${d.data.title}</h3>
					<p class="uk-text-meta uk-margin-remove-top">${d.data.channel}</p>
				</div>
			</div>
		</div>
		<div class="uk-modal-body">
			<iframe width="540" height="310" src="https://www.youtube.com/embed/${d.data.youtubeID}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</div>
		<div class="uk-modal-footer" uk-overflow-auto>
			<table id="video-dates-details" class="uk-table uk-table-small uk-table-hover uk-table-divider"></table>
		</div>
	</div>`;


	var vDetails = $("#modal-video-details");
	vDetails.append(html);

	//table
	var videoTable = $("#video-dates-details");

	var tableHead = `<thead>
		<tr>
			<th class="">&nbsp;</th>
			<th class="uk-table-shrink uk-text-right">Views</th>
			<th class="uk-table-shrink uk-text-right">Likes</th>
			<th class="uk-table-shrink uk-text-right">Dislikes</th>
			<th class="uk-table-shrink uk-text-right">Recomm</th>
			<th class="uk-table-shrink uk-text-right"><span class="uk-text-small">Recomm Rank</span></th>
		</tr>
	</thead>
	<tbody>
	</tbody>`;

	videoTable.append(tableHead);

	var tableBody = videoTable.find('tbody');
	
	var tableInfo = '';

	//clone to revert order
	var dataDate = d.data.dates.slice(0);
	dataDate.reverse();
	
	$.each(dataDate, function(i,d) {
		tableInfo += `<tr>
			<td>${d.moment.format("MMM D")}</td>
			<td class="uk-text-right">${d.views}</td>
			<td class="uk-text-right">${d.likes}</td>
			<td class="uk-text-right">${d.dislikes}</td>
			<td class="uk-text-right">${d.nb_recommendations}</td>
			<td class="uk-text-right">${d.recRank}</td>
		</tr>`;
	});

	tableBody.append(tableInfo);
	

	UIkit.modal(vDetails).show();

	vDetails.on('hidden',function() {
		$(this).html("");
	});
}