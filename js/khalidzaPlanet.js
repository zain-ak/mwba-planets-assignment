// myscript for 03-AJAX-01-Canada using AJAX for individual pagevar countryName;
var planets = new Array();
var rowID;
var planetName;

$(document).ready(function() {
	$("header").html("Assignment 2 | " + localStorage.getItem("authorName") + " | " + localStorage.getItem("authorNumber"));
  $("footer").html(localStorage.getItem("authorLogin") + " | " + localStorage.getItem("authorCampus"));

	// get local storage values
	planets = JSON.parse(localStorage.getItem("planets"));
	rowID = localStorage.getItem("rowID");
	planetName = localStorage.getItem("planetName");
	var planetInfo = planets[rowID];
	console.log(planetInfo);

	// fill in output fields
	$("#planetImg").attr("src", `../img/${planetInfo.image}`);
	$("#planetImg").attr("wdith", "85");
	$("#planetImg").attr("height", "85");

	$("#planetName").html(planetName);
	$("#planetColor").append(`${planetInfo.color}`);
	$("#planetRadius").append(`${planetInfo.radiusKM}km`);
	$("#distFromSun").append(`${planetInfo.distSun} Mill. km`);
	$("#distFromEarth").append(`${planetInfo.distEarth} Mill. km`);
});

