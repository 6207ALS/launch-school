// JS230 - Front-end Development with JavaScript | Exercises
// Miscellaneous GUI Apps | Exotic Animals

document.addEventListener("DOMContentLoaded", () => {
	let exoticAnimals = document.querySelector("#exotic_animals");
	let activeCaption;
	let timeOutId;

	function displayCaption(event) {
		if (event.target.tagName !== "IMG") return;

		timeOutId = setTimeout(() => {
			activeCaption = event.target.nextElementSibling;
			activeCaption.style.opacity = "1";
		}, 300);
	}

	function hideCaption(event) {
		if (event.target.tagName !== "IMG") return;

		if (timeOutId) clearTimeout(timeOutId);
		if (activeCaption) activeCaption.style.opacity = "0";
	}

	exoticAnimals.addEventListener("mouseover", displayCaption);
	exoticAnimals.addEventListener("mouseout", hideCaption);
});