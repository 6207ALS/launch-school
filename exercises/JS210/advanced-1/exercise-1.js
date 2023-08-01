// JS210 Exercises | Advanced 1
// Exercise 1 - Madlibs Revisited

let adjectives = ["quick", "lazy", "sleepy", "noisy", "hungry"];
let nouns = ["fox", "dog", "head", "leg", "tail", "cat"];
let verbs = ["jumps", "lifts", "bites", "licks", "pats"]
let adverbs = ["easily", "lazily", "noisily", "excitedly"];

function madlibs(template) {
	template = template.replace(/\*aj\*/g, _ => {
		let randomIdx = Math.floor(Math.random() * adjectives.length);
		return adjectives[randomIdx];
	});

	template = template.replace(/\*n\*/g, _ => {
		let randomIdx = Math.floor(Math.random() * nouns.length);
		return nouns[randomIdx];
	});

	template = template.replace(/\*v\*/g, _ => {
		let randomIdx = Math.floor(Math.random() * verbs.length);
		return verbs[randomIdx];
	});

	template = template.replace(/\*ad\*/g, _ => {
		let randomIdx = Math.floor(Math.random() * adverbs.length);
		return adverbs[randomIdx];
	});

	return template;
}


let template1 = 
"The *aj* brown *n* *ad*" +
" *v* the *aj* yellow " +
"*n*, who *ad* *v* his " +
"*n* and looks around.";

let template2 = "The *n* *v* the *n*'s *n*."


console.log(madlibs(template1));
console.log(madlibs(template1));
console.log(madlibs(template2));
console.log(madlibs(template2));