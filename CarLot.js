var CarLot = (function(oldCarLot) {
	var inventory = {};
	oldCarLot.processInventory = function(event) {
		inventory = JSON.parse(event.target.responseText).cars;
		// console.log("inventory", inventory);	
		populatePage(inventory);
	};
	oldCarLot.getInventory = function() {
		return inventory;
	};
	return oldCarLot;
})(CarLot || {});