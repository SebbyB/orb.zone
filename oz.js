angular.module("oz", [])
.controller("DayGridController", function(){
	var grid = this;
	grid.data = [
		[{},{},{},{},{},{}],
		[{},{},{},{},{},{}],
		[{},{},{},{},{},{}],
		[{},{},{},{},{},{}]
	];
	grid.hourClick = function(hour){
		console.log("you clicked on", hour);
		hour.active = !hour.active
	}
})