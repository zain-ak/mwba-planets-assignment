class Planet {
  constructor (id, name, color, radiusKM, distSun, distEarth, image) {
    this.id = id; this.name = name; this.color = color;
    this.radiusKM = radiusKM; this.distSun = distSun; 
    this.distEarth = distEarth; this.image = image;
  }
}

var planets = new Array();

$(document).ready(() => {
  console.log("Hello!");
  $.ajax({
    type: "GET", url: "data/planetsPlusPersonal.json",
    dataType: "json", success: loadPlanets,
    error: (e) => {alert(`${e.status} - ${e.statusText}`)}
  });
});

var loadPlanets = data => {
  $("header").html("Assignment 2 | " + data.personal.myFullName + " | " + data.personal.myStudentNumber);
  $("footer").html(data.personal.myLoginName + " | " + data.personal.myCampus);

  localStorage.setItem("authorName", data.personal.myFullName);
  localStorage.setItem("authorNumber", data.personal.myStudentNumber);
  localStorage.setItem("authorLogin", data.personal.myLoginName);
  localStorage.setItem("authorCampus", data.personal.myCampus);

  data.solarSystem.planets.forEach((element, index) => {
    planets.push(new Planet(
      index,
      element.planetName,
      element.planetColor,
      element.planetRadiusKM,
      element.distInMillionsKM.fromSun,
      element.distInMillionsKM.fromEarth,
      element.image
    ));

  $("header").click(() => alert("Header Clicked!"));
  });

  planets.forEach((planet, index) => {
    //console.log(planet.id);
    //console.log(planet);
    $("#planetList").append( 
      `
      <li li-id="${index}">
        <a href="pages/planetPage.html">
          <img src="img/${planet.image}"/>&nbsp;&nbsp;&nbsp;${planet.name}
        </a>
      </li>
      `
    );
  });
}

// Save data to local storage
$(document).on("click", "#planetList >li", function() {
  var id = $(this).closest("li").attr("li-id");
  localStorage.setItem("rowID", id);
  localStorage.setItem("planetName", planets[id].name);
  localStorage.setItem("planets", JSON.stringify(planets));
});