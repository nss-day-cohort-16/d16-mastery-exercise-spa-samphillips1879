"use strict";

function populatePage (carsArray) {
	let i = 0,
	carString = '',
	carDiv,
	cardCounter = 0;


	carsArray.forEach( function(car, index) {
		carString = `<div class="col-md-4 carCard" id="car--${index}"><h2>${car.year} ${car.make} ${car.model}</h2><h4>$${car.price}</h4><p>${car.description}</p></div>`;

		if (i === 0) {
			carDiv = document.createElement("div");
			carDiv.classList.add("row");
			carDiv.innerHTML = carString;
			i = 1;
			if (cardCounter === carsArray.length -1) {
				document.getElementById("inventoryOutput").appendChild(carDiv);
			}
		} else if (i === 1) {
			carDiv.innerHTML += carString;
			i = 2;
			if (cardCounter === carsArray.length -1) {
				document.getElementById("inventoryOutput").appendChild(carDiv);
			}
		} else if (i === 2) {
			carDiv.innerHTML += carString;
			document.getElementById("inventoryOutput").appendChild(carDiv);
			i = 0;
		}
		cardCounter ++;
	});
  CarLot.activateEvents();
};

CarLot.loadInventory();
