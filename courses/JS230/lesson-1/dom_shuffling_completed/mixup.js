
// Move main header before main
let header = document.body.querySelector("body > header");
let main = document.body.querySelector("main");

main.insertAdjacentElement("beforebegin", header);

// Move "My Site!" to header
let heading1 = main.querySelector("h1");
header.insertAdjacentElement("afterbegin", heading1);

// Move figures into article
let article = main.querySelector("article");
let figures = main.querySelectorAll("figure");
let figuresArray = Array.prototype.slice.call(figures);

figuresArray.forEach(figure => {
	article.insertAdjacentElement("beforeend", figure);
})

// Swap images

let [babyFigure, chinStickFigure] = figures;
let babyImg = babyFigure.firstElementChild; 
let chinStickImg = chinStickFigure.firstElementChild;

babyFigure.insertAdjacentElement("afterbegin", chinStickImg);
chinStickFigure.insertAdjacentElement("afterbegin", babyImg);


