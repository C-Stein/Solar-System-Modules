var solarSystem = (function(SolarSystem) {
  var closest5 = ["Proxima Centauri", "α Centauri A ", "α Centauri B ", "Barnard's Star ", "Luhman 16A"];
  var estimatedAge = 4.568e8;
  var dwarfPlanets = ["dwarf1", "dwarf2", "dwarf3"];

  
    
    SolarSystem.getClosest5 =  function() {
      return closest5;
    },
    SolarSystem.getEstimatedAge = function() {
      return estimatedAge;
    },
    SolarSystem.setEstimatedAge = function(guessedAge) {
      setEstimatedAge = guessedAge;
    },
    SolarSystem.getDwarfPlanets = function() {
      return dwarfPlanets;
    },
    SolarSystem.setDwarfPlanets = function(newDwarfArray) {
      dwarfPlanets = newDwarfArray;
    }
  
  
  return SolarSystem;

})(solarSystem);

/*
Getter for an array of closest 5 stars to the Sun.
Getter/setter for the estimated age of the solar system in earth years.
Getter/setter for array of known dwarf planets. */