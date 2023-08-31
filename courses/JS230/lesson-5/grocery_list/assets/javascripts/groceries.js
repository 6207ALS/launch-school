// JS230 Lesson 5: Putting it All Together
// Assignment: Grocery List

document.addEventListener("DOMContentLoaded", () => {
	let form = document.querySelector("form");
	let groceryList = document.querySelector("#grocery-list");
	let items = {};

	form.addEventListener("submit", event => {
		event.preventDefault();
		let itemName = document.querySelector("#name").value;
		let quantity = document.querySelector("#quantity").value;

		if (!(itemName.trim())) return;

		if (items.hasOwnProperty(itemName)) {
			items[itemName] += Number(quantity) || 1;
			console.log(items[itemName]);
			let listItem = document.querySelector(`[data-itemname=${itemName}]`);
			listItem.textContent = `${items[itemName]} ${itemName}`;
		} else {
			items[itemName] = Number(quantity) || 1;
			let listItem = document.createElement("li");
			listItem.setAttribute("data-itemname", itemName);
			listItem.textContent = `${items[itemName]} ${itemName}`;
			groceryList.appendChild(listItem);
		}

		form.reset();
	});
});