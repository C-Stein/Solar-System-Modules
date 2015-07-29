var solarSystem = (function() {
  var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
  var exploredPlanets = 4;
  var spacecraft = ["Rocketship1", "Rocketship2", "UFO"]

  return {
    lastModifiedOn: new Date(),
    getExplored: function() {
      return exploredPlanets;
    },
    setExplored: function(allExploredPlanets) {
      exploredPlanets = allExploredPlanets;
    },
    getPlanets: function() {
      return planets;
    },
    getSpacecraft: function() {
      return spacecraft;
    },
    setSpacecraft: function(allSpacecraft) {
      spacecraft = allSpacecraft;
    },
  };
})();

/* Break now for a class exercise. Have students create a new directory named modules where they will create an HTML and a JS file. 
The JS file should create an IIFE module named SolarSystem.
 Have the student create properties and methods for the following:

Getter for an array of planets that cannot be modified.
Getter/setter for number of planets that humans have landed people or robots on.
Public property for holding a last modified date.
Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
Any other fun/related data that the student wants to add. */