// JS230 Lesson 5: Putting it All Together
// Assignment: Photo Gallery

document.addEventListener("DOMContentLoaded", async () => {
	let photos;
	let templates = {};
	let activePhotoId = 1;

	document.querySelectorAll("[type='text/x-handlebars']").forEach(template => {
		templates[template["id"]] = Handlebars.compile(template["innerHTML"]);
	});

	document.querySelectorAll("[data-type='partial']").forEach(partial => {
		Handlebars.registerPartial(partial["id"], partial["innerHTML"]);
	});
	
	function retrievePhotos() {
		return new Promise((resolve, reject) => {
			let request = new XMLHttpRequest();
			request.responseType = "json";
			request.open("GET", "/photos");

			request.addEventListener("load", event => {
				photos = request.response;
				resolve();
			});

			request.send();
		});
	}

	function renderPhotos() {
		return new Promise(async (resolve, reject) => {
			let slides = document.querySelector("#slides");
			let photosHTML = templates.photos({ photos });
	
			slides.insertAdjacentHTML("beforeend", photosHTML);
			resolve();
		});
	}

	async function renderPhoto(photoId) {
		let slides = document.querySelector("#slides");
		let photo = document.querySelector(`figure[data-id="${photoId}"`);

		slides.insertBefore(photo, slides.firstElementChild);		
	}

	function renderPhotoInformation(photoId) {
		let photo = photos[retrievePhotoIdx(photoId)];
		let photoInfoElement = document.querySelector("section > header");
		photoInfoElement.textContent = "";
		let photoInfoHTML = templates["photo_information"](photo);
		photoInfoElement.insertAdjacentHTML("beforeend", photoInfoHTML);
	}

	function retrievePhotoIdx(photoId) {
		return photos.findIndex(photo => photo.id === photoId);
	}

	function retrieveComments(photoId) {
		return new Promise((resolve, reject) => {
			let request = new XMLHttpRequest();
			request.responseType = "json";
			request.open("GET", `/comments?photo_id=${photoId}`);

			request.addEventListener("load", event => {
				resolve(request.response);
			});

			request.send();
		});
	}

	async function renderComments(photoId) {
		let comments = await retrieveComments(photoId);
		let commentsHTML = templates["photo_comments"]({ comments });
		let commentsList = document.querySelector("#comments > ul");
		commentsList.textContent = "";
		commentsList.insertAdjacentHTML("beforeend", commentsHTML);
	}

	function postAction(event) {
		return new Promise((resolve, reject) => {
			let request = new XMLHttpRequest();
			let path = event.target.getAttribute("href");
			let photo_id = +event.target.getAttribute("data-id");
			let data = JSON.stringify({ photo_id });

			request.open("POST", path);
			request.setRequestHeader("Content-Type", "application/json");
			request.responseType = "json";

			request.addEventListener("load", event => {
				resolve(request.response);
			});

			request.send(data);
		});
	}

	async function processAction(event) {
		event.preventDefault();

		let { total } = await postAction(event);
		let dataProperty = event.target.getAttribute("data-property");
		let button = document.querySelector(`a[data-property="${dataProperty}"]`);

		button.textContent = button.textContent.replace(/[\d]+/, total);
	}

	function postComment(event) {
		return new Promise((resolve, reject) => {
			let request = new XMLHttpRequest();
			let path = event.currentTarget.getAttribute("action");
			let data = new FormData(event.currentTarget);
			data.set("photo_id", activePhotoId);

			request.open("POST", path);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.responseType = "json";
			request.addEventListener("load", event => {
				resolve(request.response);
			});

			request.send(new URLSearchParams([...data]));
		});
	}

	async function processComment(event) {
		event.preventDefault();

		await postComment(event);
		renderComments(activePhotoId);
		this.reset();
	}

	function processSlide(event) {
		event.preventDefault();

		if (event.target.className === "prev") {
			if (--activePhotoId === 0) activePhotoId = photos.length;
		} else if (event.target.className === "next") {
			if (++activePhotoId === photos.length + 1) activePhotoId = 1;
		}
		 
		renderPhoto(activePhotoId);
		renderPhotoInformation(activePhotoId);
		renderComments(activePhotoId);
	}

	retrievePhotos()
		.then(_ => {
			renderPhotos();
			renderPhotoInformation(activePhotoId);
			renderComments(activePhotoId);
		});
		

	let slideshowButtons = document.querySelector("#slideshow ul");
	slideshowButtons.addEventListener("click", processSlide);

	let actionButtons = document.querySelector("section > header");
	actionButtons.addEventListener("click", event => {
		if (event.target.tagName === "A") processAction(event);
	});

	let newComment = document.querySelector("#newComment");
	newComment.addEventListener("submit", processComment);
});