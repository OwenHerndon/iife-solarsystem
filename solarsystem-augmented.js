 //get/set stars to the sun
 //get/set age of solar
 //get/set dwarf planets

 var SolarSystem = (function(newSolarSystem){
 	var closestStars = [];
 	var ageOfTheSolarSystem = 0;
 	var dwarfPlanets = ["Pluto"];

 	//return{
 		newSolarSystem.getStars = function(){
			return closestStars;
		},
		newSolarSystem.setStars = function(addedStars){
			closestStars.push(addedStars);
		},
		newSolarSystem.getAge = function(){
			return ageOfTheSolarSystem;
		},
		newSolarSystem.setAge = function(ageIsOnlyANumber){
			ageOfTheSolarSystem = ageIsOnlyANumber;
		},
		newSolarSystem.getDwarfs = function(){
			return dwarfPlanets;
		},
		newSolarSystem.setDwarfs = function(addedDwarfs){
			dwarfPlanets.push(addedDwarfs);
		}
	//}

 return	newSolarSystem;

 })(SolarSystem || {});