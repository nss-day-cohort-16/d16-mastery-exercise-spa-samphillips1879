function populatePage (carsArray) {
	carsArray.forEach(function(car, index) {
			let carString = `<div class="col-md-4 carCard" id="car--${index}"><h2>${car.year} ${car.make} ${car.model}</h2><h4>$${car.price}</h4><p>${car.description}</p>`;
			let carDiv = document.createElement("div");
			carDiv.innerHTML = carString;
			document.getElementById("inventoryOutput").appendChild(carDiv);
	});
  CarLot.activateEvents();
};
var carLoader = new XMLHttpRequest;
carLoader.addEventListener("load", CarLot.processInventory);
carLoader.open("GET", "inventory.json");
carLoader.send();