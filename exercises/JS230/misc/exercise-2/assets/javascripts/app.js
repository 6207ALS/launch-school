// JS230 - Front-end Development with JavaScript | Exercises
// Miscellaneous GUI Apps | Programming Languages Info

const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

languages.forEach(lang => {
	lang["less"] = lang["description"].substring(0, 120) + " ...";
})

document.addEventListener("DOMContentLoaded", () => {
	let languagesContainer = document.querySelector("#languages");

	let languagesTemplateHTML = document.querySelector("#languages-template").innerHTML;
	let languagesTemplate = Handlebars.compile(languagesTemplateHTML);
	
	let languagePartialHTML = document.querySelector("#language-partial").innerHTML;
	Handlebars.registerPartial("language", languagePartialHTML);

	function renderLanguages() {
		let languagesHTML = languagesTemplate({ languages });

		languagesContainer.insertAdjacentHTML("beforeend", languagesHTML);
	}

	function renderFullDescription(event) {
		let languageName = event.target.parentElement.getAttribute("data-lang");
		let descriptionElement = document.querySelector(`#${languageName}-description`);

		descriptionElement.textContent = languages[findLanguageIdx(languageName)].description;
		event.target.textContent = "Show Less";
	}

	function renderLessDescription(event) {
		let languageName = event.target.parentElement.getAttribute("data-lang");
		let descriptionElement = document.querySelector(`#${languageName}-description`);

		descriptionElement.textContent = languages[findLanguageIdx(languageName)].less;
		event.target.textContent = "Show More";
	}

	function findLanguageIdx(name) {
		return languages.findIndex(lang => lang.name === name);
	}

	renderLanguages();

	languagesContainer.addEventListener("click", event => {
		if (event.target.tagName === "A") {
			if (event.target.textContent === "Show More") {
				renderFullDescription(event);
			} else {
				renderLessDescription(event);
			}
		}
	});

});