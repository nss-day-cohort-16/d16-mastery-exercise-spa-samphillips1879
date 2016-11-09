"use strict";
var CarLot = (function(oldCarLot) {
	var inventory = {};
	oldCarLot.processInventory = function(event) {
		inventory = JSON.parse(event.target.responseText).cars;
		populatePage(inventory);
	};
	oldCarLot.getInventory = function() {
		return inventory;
	};

	var carLoader = new XMLHttpRequest;
	carLoader.addEventListener("load", oldCarLot.processInventory);
	carLoader.open("GET", "inventory.json");
	carLoader.send();


	return oldCarLot;
})(CarLot || {});