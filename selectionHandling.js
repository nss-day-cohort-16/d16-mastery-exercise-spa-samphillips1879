var CarLot = (function(oldCarLot) {

	oldCarLot.select = function(event, color) {
		let userInput = document.getElementById("descriptionInput");
		userInput.value = "";
		userInput.focus();

		event.currentTarget.classList.toggle("activeCar");

	};

	oldCarLot.unselect = function() {
		let selectedCars = document.getElementsByClassName("activeCar");
		for(let i = 0; i < selectedCars.length; i ++) {
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