"use strict";
var CarLot = (function(oldCarLot) {
	var inventory = {};
	oldCarLot.processInventory = function(event) {
		inventory = JSON.parse(event.target.responseText).cars;
		// return inventory;
		populatePage(inventory);
	};
	oldCarLot.getInventory = function() {
		return inventory;
	};

	oldCarLot.loadInventory = function() {
		var carLoader = new XMLHttpRequest;
		// carLoader.addEventListener("load", CarLot.populatePage);
		carLoader.addEventListener("load", oldCarLot.processInventory);
		carLoader.open("GET", "inventory.json");
		carLoader.send();
	}


	return oldCarLot;
})(CarLot || {});