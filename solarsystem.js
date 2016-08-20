//1 public property for holding the last modified date
//getter/setter for the planets
// getter/setter for active spacecraft 
// getter/setter for planets lands on

var SolarSystem = (function(){
	var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
	var activeSpacecraft = [];
	var planetsLandedOn = 0;

	return{
		lastModifiedDate: new Date(),
		getPlanets: function(){
			return planets;
		},
		setPlanets: function(addedPlanets){
			planets.push(addedPlanets);
		},
		getSpacecraft: function(){
			return activeSpacecraft;
		},
		setSpacecraft: function(addedSpaceship){
			activeSpacecraft.push(addedSpaceship);
		},
		getLanded: function(){
			return planetsLandedOn;
		},
		setLanded: function(numberLanded){
			planetsLandedOn = numberLanded;
		}
	}
})();