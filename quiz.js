var inventory = {};
function processInventory(event) {
	inventory = JSON.parse(event.target.responseText).cars;
	console.log("inventory", inventory);	
	cardBuilder(inventory);

};

function cardBuilder(carsArray) {
	carsArray.forEach(function(car, index) {
		let carString = `<div id="car--${index}"><h2>${car.year} ${car.make} ${car.model}</h2><h4>$${car.price}</h4><p>${car.description}</p>`;
		console.log("carString", carString);
		let carDiv = document.createElement("div");
		carDiv.innerHTML = carString;
		document.getElementById("inventoryOutput").appendChild(carDiv);

	});
};

var carLoader = new XMLHttpRequest;
carLoader.addEventListener("load", processInventory);
carLoader.open("GET", "inventory.json");
carLoader.send();



