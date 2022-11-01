/*
The revised madlibs program takes a text "template" as input, plugs in a 
selection of randomized nouns, verbs, adjectives, and adverbs into the 
appropriate areas of the text, and then returns it.

The templates are structured so that blanks that require a part of speech (noun,
adjective, verb, or adverb) are formatted as " + [category] + ". For instance,
a blank that requires a noun would contain the substring '"noun"' instead of 
an actual noun. 

The madlibs function uses the .replaceAll() function to replace every blank with
a random word in the "list" object. For instance if the function encounters 
"noun", it accesses the "list" object's noun property. The function then picks a
random word from the noun property's array of nouns. 
*/

let list = {
  adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
  noun: ["fox", "dog", "head", "leg", "tail", "cat"],
  verb: ["jumps", "lifts", "bites", "licks", "pats"],
  adverb: ["easily", "lazily", "noisily", "excitedly"]
}

function madlibs (template) {
  template = template.replaceAll(/"[a-z]*"/g, word => {
    word = word.replaceAll('"', "");
    return list[word][Math.floor(Math.random() * list[word].length)];
  });
  return template;
}

// test cases
let template1 = 
`The "adjective" brown "noun" "adverb" "verb" the "adjective" yellow "noun", 
who "adverb" "verb" his "noun" and looks around.`;

let template2 =
`The "noun" "verb" the "noun"'s "noun".`

console.log(madlibs(template1));
console.log(madlibs(template2));