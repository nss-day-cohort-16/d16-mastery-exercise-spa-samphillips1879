var CarLot = (function(oldCarLot) {
	oldCarLot.activateEvents = function() {
		let numCars = CarLot.getInventory().length;
		for (i = 0; i < numCars; i++) {
			document.getElementById(`car--${i}`).addEventListener("click", CarLot.unselect);
			document.getElementById(`car--${i}`).addEventListener("click", function() {
				CarLot.select(this, "lightBlue")
			});
		}
		document.getElementById("descriptionInput").addEventListener("keyup", CarLot.descriptionUpdate);
		document.getElementById("descriptionInput").addEventListener("keyup", CarLot.descriptionEnter);
	};
	return oldCarLot;
})(CarLot || {});