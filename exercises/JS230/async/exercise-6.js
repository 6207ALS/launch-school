// JS230 - Front-end Development with JavaScript | Exercises
// Events and Asynchronous Programming | Selection Filters

let classifications = {
  "Vertebrate": ["Bear", "Turtle", "Whale", "Salmon", "Ostrich"],
  "Warm-blooded": ["Bear", "Whale", "Ostrich"],
  "Cold-blooded": ["Salmon", "Turtle"],
  "Mammal": ["Bear", "Whale"],
  "Bird": ["Ostrich"],
};

let animals = {
  "Bear": ["Vertebrate", "Warm-blooded", "Mammal"],
  "Turtle": ["Vertebrate", "Cold-blooded"],
  "Whale": ["Vertebrate", "Warm-blooded", "Mammal"],
  "Salmon": ["Vertebrate", "Cold-blooded"],
  "Ostrich": ["Vertebrate", "Warm-blooded", "Bird"],
}


document.addEventListener("DOMContentLoaded", () => {
  let selectClassification = document.querySelector("#animal-classifications");
  let selectAnimal = document.querySelector("#animals");
  let form = document.querySelector("#selection-filters")


  document.addEventListener("change", event => {
    let selection = event.target;
    let selectionValue = selection.value;
    selectClassification.options.length = 0;
    selectAnimal.options.length = 0;

    let selectionOption = document.createElement("OPTION");
    selectionOption.setAttribute("value", selectionValue);
    selectionOption.textContent = selectionValue;
    selection.appendChild(selectionOption);

    if (selection.id === 'animal-classifications') {
      classifications[selectionValue].forEach((animal, index) => {
        let option = document.createElement("OPTION");
        option.setAttribute("value", `${animal}`);
        option.textContent = animal;
        selectAnimal.appendChild(option);
      });
    } else if (selection.id === 'animals') {
      animals[selectionValue].forEach((classification, index) => {
        let option = document.createElement("OPTION");
        option.setAttribute("value", `${classification}`);
        option.textContent = classification;
        selectClassification.appendChild(option);
      });
    }
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    selectClassification.options.length = 0;
    selectAnimal.options.length = 0;

    let animalOption = document.createElement("OPTION");
    animalOption.setAttribute("value", "Animals");
    animalOption.textContent = "Animals";
    selectAnimal.appendChild(animalOption);

    let classificationOption = document.createElement("OPTION");
    classificationOption.setAttribute("value", "Classifications");
    classificationOption.textContent = "Classifications";
    selectClassification.appendChild(classificationOption);

    Object.keys(classifications).forEach(classification => {
      let option = document.createElement("OPTION");
      option.setAttribute("value", `${classification}`);
      option.textContent = classification;
      selectClassification.appendChild(option);
    });

    Object.keys(animals).forEach(animal => {
      let option = document.createElement("OPTION");
      option.setAttribute("value", `${animal}`);
      option.textContent = animal;
      selectAnimal.appendChild(option);
    });
  })
  
});
