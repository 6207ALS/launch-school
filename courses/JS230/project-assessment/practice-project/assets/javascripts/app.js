// JS239 Assessment | Practice Project

document.addEventListener("DOMContentLoaded", () => {
	let swapContainerElements = document.querySelectorAll("#swap-container > *");

	let contactsSection = document.querySelector("#contacts-section");
	let contactsContainer = document.querySelector("#contacts-container");

	let contactFormSection = document.querySelector("#contact-form-section");
	let contactForm = document.querySelector("#contact-form");
	let contactFormTitle = document.querySelector("#contact-form-title");

	let tagForm = document.querySelector("#tag-form");
	let tagFormSection = document.querySelector("#tag-form-section");
	let tagFormInputs = tagForm.querySelectorAll("input");

	let templates = {};

	document.querySelectorAll("[data-type='template']").forEach(template => {
		templates[template.id] = Handlebars.compile(template.innerHTML);
	});

	document.querySelectorAll("[data-type='partial']").forEach(partial => {
		Handlebars.registerPartial(partial.id, partial.innerHTML);
	});

	class ContactsManager {
		constructor() {
			this.init();
		}

		async init() {
			this.contacts = await this.retrieveAllContacts();
			this.tags = this.retrieveUniqueTags();
			this.renderTagOptions(document.querySelector("#tags-filter-select"));
			this.renderContactsSearch();
			this.bindEvents();
		}

	  retrieveAllContacts() {
			return new Promise((resolve, reject) => {
				let request = new XMLHttpRequest();
				request.open("GET", "http://localhost:3000/api/contacts");
				request.responseType = "json";

				request.addEventListener("load", event => {
					resolve(request.response);
				});
	
				request.send();
			});
		}

		retrieveContact(id) {
			return new Promise((resolve, reject) => {
				let request = new XMLHttpRequest();
				request.open("GET", `http://localhost:3000/api/contacts/${id}`);
				request.responseType = "json";

				request.addEventListener("load", event => {
					resolve(request.response);
				});
	
				request.send();
			});
		}

		deleteContact(id) {
			return new Promise((resolve, reject) => {
				let request = new XMLHttpRequest();
				request.open("DELETE", `http://localhost:3000/api/contacts/${id}`);
				request.responseType = "json";
	
				request.send();
			});
		}

		createContact() {
			return new Promise((resolve, reject) => {
				let request = new XMLHttpRequest();
				request.open("POST", `http://localhost:3000/api/contacts`);
				request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				request.responseType = "json";
				
				let data = {};
				new FormData(contactForm).forEach((value, key) => data[key] = value);
				var json = JSON.stringify(data);

				request.addEventListener("load", () => resolve(request.response));

				request.send(json);
			});
		}

		updateContact(id) {
			return new Promise((resolve, reject) => {
				let request = new XMLHttpRequest();
				request.open("PUT", `http://localhost:3000/api/contacts/${id}`);
				request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				request.responseType = "json";
				
				let data = {};
				new FormData(contactForm).forEach((value, key) => { 
					if (key === "tags" && value !== "") {
						let userTags = document.querySelector("#user-tags")
																	 .textContent
																	 .split(",")
																	 .filter(el => el);
						if (userTags.includes(value)) {
							return;
						} else {
							userTags.push(value);
							data[key] = userTags.join(",");
						}
					} else {
						data[key] = value;
					}
				});
				var json = JSON.stringify(data);

				request.addEventListener("load", () => resolve(request.response));

				request.send(json);
			});
		}

		createTag(event) {
			let tag = document.querySelector("#tag_name").value.trim();
			if (!this.tags.includes(tag)) this.tags.push(tag);
		}

		async renderContactsSearch() {
			this.contacts = await this.retrieveAllContacts();

			let searchInput = document.querySelector("#search-contact-input");
			let searchValue = searchInput.value;
			let contacts = this.filterContactsSearch(searchValue);
			let contactsHTML = templates["contacts"]({ contacts, searchValue });

			contactsContainer.innerHTML = "";
			contactsContainer.insertAdjacentHTML("beforeend", contactsHTML);
			
			this.displayContacts();
		}

		async renderContactsTag() {
			let tag = document.querySelector("#tags-filter-select").value;
			let contacts = this.filterContactsTag(tag);
			let contactsHTML = templates["contacts"]({ contacts, tag });

			contactsContainer.innerHTML = "";
			contactsContainer.insertAdjacentHTML("beforeend", contactsHTML);
			
			this.displayContacts();
		}

		renderTagOptions(select) {
			let tags = [ "All", ...this.tags ];
			let tagsHTML = templates["tags"]({ tags });

			select.innerHTML = "";
			select.insertAdjacentHTML("beforeend", tagsHTML);
		}

		filterContactsSearch(search) {
			return search ? this.contacts.filter(contact => {
				return new RegExp(`^${search}`, "i").test(contact.full_name);
			}) : this.contacts;
		}

		filterContactsTag(tag) {
			return tag === "All" ? this.contacts : this.contacts.filter(contact => {
				return (contact.tags || "").includes(tag);
			});
		}

		handleButton(event) {
			event.preventDefault();
			if (event.target.tagName !== "BUTTON") return;
			let buttonType = event.target.getAttribute("data-type");

			switch (buttonType) {
				case "create":
				case "edit":
					this.displayForm(event);
					break;
				case "delete":
					this.handleDeleteContact(event);
					break;
				case "submit":
					this.handleSubmitForm(event);
					break;
				case "cancel":
					this.displayContacts(event);
			}
		}

		displayForm(event) {
			let buttonFor = event.target.getAttribute("data-for");

			switch (buttonFor) {
				case "contacts":
					this.displayContactForm(event);
					break;
				case "tags":
					this.displayTagForm(event);
					break;
			}
		}

		async displayContactForm(event) {
			let contactId = event.target.getAttribute("data-id");
			let contactInfo = contactId ? await this.retrieveContact(contactId) : null;

			let contactFormHTML = templates["contact-form-template"]({ 
				contactInfo, 
				tags: [ "", ...this.tags ],
			});
			contactForm.innerHTML = "";
			contactForm.insertAdjacentHTML("beforeend", contactFormHTML);

			let submitButton = document.querySelector("#contact-form-submit-btn");
			submitButton.setAttribute("formmethod", contactId ? "put" : "post");
			contactFormTitle.textContent = `${contactId ? "Edit" : "Create"} Contact`;

			contactForm.setAttribute("data-id", contactId || "");

			this.displaySwapElement(contactFormSection.id);
		}

		displayContacts() {
			this.displaySwapElement(contactsSection.id);
		}

		displayTagForm() {
			tagFormInputs.forEach(input => input.value = "");
			this.displaySwapElement(tagFormSection.id);
		}

		displaySwapElement(elementId) {
			swapContainerElements.forEach(element => element.classList.add("invisible"));
			document.getElementById(elementId).classList.remove("invisible");
		}

		handleDeleteContact(event) {
			let confirmed = confirm("Do you want to delete the contact?");

			if (confirmed) {
				let contactId = event.target.getAttribute("data-id");
				this.deleteContact(contactId);
				let contactContainer = document.querySelector(`div[data-id="${contactId}"]`);
				contactContainer.remove();
			}
		}

		handleSubmitForm(event) {
			let buttonFor = event.target.getAttribute("data-for");

			switch (buttonFor) {
				case "contacts":
					this.handleSubmitContactForm(event);
					break;
				case "tags":
					this.handleSubmitTagForm(event);
					break;
			}
		}

		handleSubmitContactForm(event) {
			let contactFormSubmitBtn = document.querySelector("#contact-form-submit-btn");
			if (this.validateContactForm()) {
				if (contactFormSubmitBtn.getAttribute("formmethod") === "post") {
					this.createContact().then(_ => this.renderContactsSearch());
				} else if (contactFormSubmitBtn.getAttribute("formmethod") === "put") {
					let id = contactForm.getAttribute("data-id");
					this.updateContact(id).then(_=> this.renderContactsSearch());
				}
			}
		}

		handleSubmitTagForm(event) {
			if (this.validateTagForm()) {
				this.createTag(event);
				this.renderTagOptions(document.querySelector("#tags-filter-select"));
				this.renderContactsTag();
			}
		}

		retrieveUniqueTags() {
			let tags = [];
			
			this.contacts.forEach(contact => {
				if (contact.tags) {
					let contactTags = contact.tags.split(",");
					contactTags.forEach(tag => {
						if (!tags.includes(tag)) tags.push(tag);
					});
				}
			});

			return tags;
		}

		validateContactForm() {
			let validated = true;
			let contactFormInputs = document.querySelectorAll("#contact-form input");

			for (let input of contactFormInputs) {
				let p = document.querySelector(`p[id=${input.id}-message]`);
				if (!input.value.trim()) {
					p.textContent = `Please enter the ${p.getAttribute("data-field")} field`;
					validated = false;
				} else {
					p.textContent = "";
				};
			}

			return validated;
		}

		validateTagForm() {
			let validated = true;

			for (let input of tagFormInputs) {
				let p = document.querySelector(`p[id=${input.id}-message]`);
				if (!input.value.trim()) {
					p.textContent = `Please enter the ${p.getAttribute("data-field")} field`;
					validated = false;
				} else {
					p.textContent = "";
				};
			}

			return validated;
		}

		bindEvents() {
			let searchInput = document.querySelector("#search-contact-input");
			searchInput.addEventListener("input", this.renderContactsSearch.bind(this));

			let selectTag = document.querySelector("#tags-filter-select");
			selectTag.addEventListener("change", this.renderContactsTag.bind(this));

			document.addEventListener("click", this.handleButton.bind(this));
		}
	}

	new ContactsManager();
});