// JS230 - Front-end Development with JavaScript | Exercises
// Miscellaneous GUI Apps | Adding Smart Select to Car Shop

const cars = [
  { make: 'Honda', model: 'Accord', year: 2005, price: 7000, image: 'https://dbdwvr6p7sskw.cloudfront.net/js-exercises/mini_projects/misc_gui_projects/05_car_filter/images/honda-accord-2005.jpg'},
  { make: 'Honda', model: 'Accord', year: 2008, price: 11000, image: 'https://dbdwvr6p7sskw.cloudfront.net/js-exercises/mini_projects/misc_gui_projects/05_car_filter/images/honda-accord-2008.jpg'},
  { make: 'Toyota', model: 'Camry', year: 2009, price: 12500, image: 'https://dbdwvr6p7sskw.cloudfront.net/js-exercises/mini_projects/misc_gui_projects/05_car_filter/images/toyota-camry-2009.jpg'},
  { make: 'Toyota', model: 'Corrolla', year: 2016, price: 15000, image: 'https://dbdwvr6p7sskw.cloudfront.net/js-exercises/mini_projects/misc_gui_projects/05_car_filter/images/toyota-corrolla-2016.jpg'},
  { make: 'Suzuki', model: 'Swift', year: 2014, price: 9000, image: 'https://dbdwvr6p7sskw.cloudfront.net/js-exercises/mini_projects/misc_gui_projects/05_car_filter/images/suzuki-swift-2014.jpg'},
  { make: 'Audi', model: 'A4', year: 2013, price: 25000, image: 'https://dbdwvr6p7sskw.cloudfront.net/js-exercises/mini_projects/misc_gui_projects/05_car_filter/images/audi-a4-2013.jpg'},
  { make: 'Audi', model: 'A4', year: 2013, price: 26000, image: 'https://dbdwvr6p7sskw.cloudfront.net/js-exercises/mini_projects/misc_gui_projects/05_car_filter/images/audi-a4-2013.jpg'},
];

document.addEventListener("DOMContentLoaded", () => {
	let filtersContainer = document.querySelector("#filters");
	let carsContainer = document.querySelector("#cars")
	let categories = categorizedCarData();
	let templates = {}

	document.querySelectorAll("script[data-type='template']").forEach(template => {
		templates[template.id] = Handlebars.compile(template.innerHTML);
	});

	document.querySelectorAll("script[data-type='partial']").forEach(partial => {
		Handlebars.registerPartial(partial.id, partial.innerHTML)
	});

	function categorizedCarData() {
		let data = {};

		cars.forEach(car => {
			Object.keys(car).forEach(category => {
				if (!data.hasOwnProperty(category)) data[category] = [];
				if (!data[category].includes(car[category])) {
					data[category].push(car[category]);
				}
			});
		});

		return data;
	}

	function renderFilterUI() {
		let filterTemplateHTML = templates["filter_template"](categories);
		filtersContainer.insertAdjacentHTML("beforeend", filterTemplateHTML);

		let filterBtn = document.querySelector(".filter_btn");
		filterBtn.addEventListener("click", renderCars);
	}

	function filterCars(categoriesValues) {
		return cars.filter(car => {
			return Object.keys(categoriesValues).every(category => {
				return (["all", "any"].includes(categoriesValues[category]) ||
					car[category] === categoriesValues[category] ||
					car[category] === +categoriesValues[category]);
			});
		});
	}

	function retrieveCategoriesValues() {
		let result = {};

		let selectElements = filtersContainer.querySelectorAll("select");
		selectElements.forEach(select => {
			let category = select.getAttribute("data-category");
			result[category] = select.value;
		});

		return result;
	}

	function limitModels() {
		let currentMake = document.querySelector("#make_select").value;
		if (currentMake === "all") return;

		let filteredModels = makesModels(currentMake);
		renderModelOptions(filteredModels);
	}

	function makesModels(make) {
		let models = [];

		cars.forEach(car => {
			if (car.make === make) models.push(car.model);
		});

		return models.filter((model, index) => models.indexOf(model) === index);
	}

	function renderModelOptions(models) {
		let modelSelect = document.querySelector("#model_select");
		modelSelect.textContent = "";

		let allOption = document.createElement("OPTION");
		allOption.textContent = "All";
		allOption.setAttribute("value", "all");
		modelSelect.appendChild(allOption);

		models.forEach(model => {
			let modelOption = document.createElement("OPTION");
			modelOption.textContent = model;

			modelSelect.appendChild(modelOption);
		});
	}

	function renderCars() {
		let categoriesValues = retrieveCategoriesValues();
		let cars = filterCars(categoriesValues);
		limitModels();

		let carsHTML = templates["cars_template"]({ cars });
		carsContainer.textContent = "";
		carsContainer.insertAdjacentHTML("beforeend", carsHTML);
	}

	renderFilterUI();
	renderCars();
});