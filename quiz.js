function populatePage (carsArray) {
	carsArray.forEach(function(car, index) {
			let carString = `<div class="col-md-4 carCard" id="car--${index}"><h2>${car.year} ${car.make} ${car.model}</h2><h4>$${car.price}</h4><p>${car.description}</p>`;
			// console.log("carString", carString);
			let carDiv = document.createElement("div");
			carDiv.innerHTML = carString;
			document.getElementById("inventoryOutput").appendChild(carDiv);

	});
  // Loop over the inventory and populate the page
  
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
};

// Load the inventory and send a callback function to be
// invoked after the process is complete


var carLoader = new XMLHttpRequest;
carLoader.addEventListener("load", CarLot.processInventory);
carLoader.open("GET", "inventory.json");
carLoader.send();