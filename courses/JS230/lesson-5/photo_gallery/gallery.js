// JS230 Lesson 5: Putting it All Together
// Assignment: Photo Gallery Slideshow


document.addEventListener("DOMContentLoaded", () => {
	let activeImg = document.querySelector("#active");
	let selectedImg = document.querySelector("#selected");
	let gallery = document.querySelector("ul");

	gallery.addEventListener("click", function(event) {
		if (event.target.tagName === "IMG") {
			activeImg.classList.remove("fadeIn");
			activeImg.classList.add("fadeOut");

			selectedImg.id = null;
			selectedImg = event.target;
			selectedImg.id = "selected";

			setTimeout(() => {
				let source = event.target.getAttribute("src");
				activeImg.setAttribute("src", source);
				activeImg.classList.remove("fadeOut");
				activeImg.classList.add("fadeIn");
			}, 250);
		}
	});


});

window.addEventListener("load", () => {
	let activeImg = document.querySelector("#active");
	let photo1 = document.querySelector("img[title='Photo 1']");

	activeImg.setAttribute("src", photo1.getAttribute("src"));
});