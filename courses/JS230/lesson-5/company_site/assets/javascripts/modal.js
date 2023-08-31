// JS230 Lesson 5: Putting it All Together
// Assignment: Team Member Profile Modals

document.addEventListener("DOMContentLoaded", () => {
	let modalOverlay = document.querySelector("#modal-overlay");
	let modal = document.querySelector("#modal");
	let modalImg = document.querySelector("#modal-img");
	let modalName = document.querySelector("#modal-name");
	let modalClose = document.querySelector("#modal-close");

	let teamDiv = document.querySelector("#team");

	teamDiv.addEventListener("click", event => {
		let target = event.target;
		if (target.tagName === "A" || target.tagName === "IMG") {
			let memberNameValue;
			let memberImgSrc;

			if (target.tagName === "A") {
				memberImgSrc = target.firstElementChild.getAttribute("src");
				memberNameValue = target.firstElementChild.getAttribute("alt");
			} else {
				memberImgSrc = target.getAttribute("src");
				memberNameValue = target.getAttribute("alt");
			}

			modalImg.setAttribute("src", memberImgSrc);
			modalName.textContent = memberNameValue;
			modal.classList.add("visibleTransition");
			modalOverlay.classList.add("visibleTransition");
		}
	});

	modalOverlay.addEventListener("click", event => {
		modal.classList.remove("visibleTransition");
		modalOverlay.classList.remove("visibleTransition");
	});

	modalClose.addEventListener("click", event => {
		modal.classList.remove("visibleTransition");
		modalOverlay.classList.remove("visibleTransition");
	})
});