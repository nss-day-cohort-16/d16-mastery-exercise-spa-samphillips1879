"use strict";
var CarLot = (function(oldCarLot) {

	oldCarLot.select = function(card, color) {
		let userInput = document.getElementById("descriptionInput");
		userInput.value = "";
		userInput.focus();
		card.classList.toggle("activeCar");

				//to clean up, remove the chunk starting here
		card.style = "background-color:" + color + ";border:3px solid black;";
				//and ending here

	};
	oldCarLot.unselect = function() {
		let selectedCars = document.getElementsByClassName("activeCar");

		
		//the next for loop could easily be replaced by the .classList method below it, if I uncommented the styling in quiz.css of the .activeCar class.... However, the instructions request that the background color is passed in as an argument.... while this is unnecessarily complicated for this situation, I did it, because that's what the instructions say to do

		//to clean up, remove the chunk starting here
		for(let i = 0; i < selectedCars.length; i ++) {
			selectedCars[i].style = "background-color:lightpink;border:1px solid black;";
		//and ending here

			selectedCars[i].classList.remove("activeCar");
		};
	};
	oldCarLot.descriptionUpdate = function(event) {
		let selectedCars = document.getElementsByClassName("activeCar");
		for(let i = 0; i < selectedCars.length; i ++) {
			selectedCars[i].childNodes[2].innerHTML = document.getElementById("descriptionInput").value;
		};
	};
	oldCarLot.descriptionEnter = function(event) {
		if (event.keyCode === 13) {
			let userInput = document.getElementById("descriptionInput");
			userInput.blur();
			userInput.value = "";
			CarLot.unselect();
		};
	};
	return oldCarLot;
})(CarLot || {});