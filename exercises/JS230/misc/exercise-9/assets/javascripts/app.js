// JS230 - Front-end Development with JavaScript | Exercises
// Miscellaneous GUI Apps | A JavaScript WYSIWYG Editor


document.addEventListener("DOMContentLoaded", () => {
	let buttonsContainer = document.querySelector(".buttons");
	let boldButton;
	let italicButton;
	let underlineButton;
	let strikeThroughButton;
	let linkButton;
	let ulButton;
	let olButton;
	let jLeftButton;
	let jRightButton;
	let jCenterButton;
	let jFullButton;

	function renderButtons() {
		renderBoldButton();
		renderItalicsButton();
		renderUnderlineButton();
		renderStrikeThroughButton();
		renderLinkButton();
		renderULButton();
		renderOLButton();
		renderTextAlignButtons();
	}
	
	
	function renderBoldButton() {
		boldButton = document.createElement("BUTTON");
		boldButton.textContent = "B";
	
		boldButton.addEventListener("click", toggleBold);
		buttonsContainer.appendChild(boldButton);
	}
	
	function toggleBold() {
		document.execCommand("bold");
		toggleButton(this);
	}
	
	
	function renderItalicsButton() {
		italicButton = document.createElement("BUTTON");
		italicButton.textContent = "I";
		italicButton.style.fontStyle = "italic";
	
		italicButton.addEventListener("click", italicizeText);
		buttonsContainer.appendChild(italicButton);
	}

	function italicizeText() {
		document.execCommand("italic");
		toggleButton(this);
	}

	function renderUnderlineButton() {
		underlineButton = document.createElement("BUTTON");
		underlineButton.textContent = "U";
		underlineButton.style.textDecoration = "underline";
	
		underlineButton.addEventListener("click", underlineText);
		buttonsContainer.appendChild(underlineButton);
	}

	function underlineText() {
		document.execCommand("underline");
		toggleButton(this);
	}


	function renderStrikeThroughButton() {
		strikeThroughButton = document.createElement("BUTTON");
		strikeThroughButton.textContent = "S";
		strikeThroughButton.style.textDecoration = "line-through";
	
		strikeThroughButton.addEventListener("click", strikeThroughText);
		buttonsContainer.appendChild(strikeThroughButton);
	}

	function strikeThroughText() {
		document.execCommand("strikeThrough");
		toggleButton(this);
	}

	function renderLinkButton() {
		linkButton = document.createElement("BUTTON");
		linkButton.textContent = "🔗";
	
		linkButton.addEventListener("click", linkText);
		buttonsContainer.appendChild(linkButton);
	}

	function linkText() {
		let URI = window.prompt("Enter the URL to link to:");
		document.execCommand("createLink", true, URI);
		toggleButton(this);
	}

	function renderULButton() {
		ulButton = document.createElement("BUTTON");
		ulButton.textContent = "UL";
	
		ulButton.addEventListener("click", unorderedList);
		buttonsContainer.appendChild(ulButton);
	}

	function unorderedList() {
		document.execCommand("insertUnorderedList");
		toggleButton(this);
	}

	function renderOLButton() {
		olButton = document.createElement("BUTTON");
		olButton.textContent = "OL";
	
		olButton.addEventListener("click", orderedList);
		buttonsContainer.appendChild(olButton);
	}

	function orderedList() {
		document.execCommand("insertOrderedList");
		toggleButton(this);
	}

	function renderTextAlignButtons() {
		renderJustifyLeftButton();
		renderJustifyRightButton();
		renderJustifyCenterButton();
		renderJustifyFullButton();
	}

	function renderJustifyLeftButton() {
		jLeftButton = document.createElement("BUTTON");
		jLeftButton.textContent = "LA";
	
		jLeftButton.addEventListener("click", justifyLeftText);
		buttonsContainer.appendChild(jLeftButton);
	}

	function justifyLeftText() {
		document.execCommand("justifyLeft");
		toggleButton(this);
		toggleButtons();
	}
	
	function renderJustifyRightButton() {
		jRightButton = document.createElement("BUTTON");
		jRightButton.textContent = "RA";
	
		jRightButton.addEventListener("click", justifyRightText);
		buttonsContainer.appendChild(jRightButton);
	}
	
	function justifyRightText() {
		document.execCommand("justifyRight");
		toggleButton(this);
		toggleButtons();
	}

	function renderJustifyCenterButton() {
		jCenterButton = document.createElement("BUTTON");
		jCenterButton.textContent = "CA";
	
		jCenterButton.addEventListener("click", justifyCenterText);
		buttonsContainer.appendChild(jCenterButton);
	}

	function justifyCenterText() {
		document.execCommand("justifyCenter");
		toggleButton(this);
		toggleButtons();
	}

	function renderJustifyFullButton() {
		jFullButton = document.createElement("BUTTON");
		jFullButton.textContent = "FA";
	
		jFullButton.addEventListener("click", justifyFullText);
		buttonsContainer.appendChild(jFullButton);
	}

	function justifyFullText() {
		document.execCommand("justifyFull");
		toggleButton(this);
		toggleButtons();
	}

	function toggleButton(button) {
		button.classList.toggle("pushed");
	}

	function toggleButtons() {
		let isBold = document.queryCommandState('bold');
    let isItalic = document.queryCommandState('italic');
    let isUnderlined = document.queryCommandState('underline');
    let isStrokeThrough = document.queryCommandState('strikeThrough');
    let isALink = document.queryCommandState('createLink');
    let isAnOL = document.queryCommandState('insertOrderedList');
    let isAUL = document.queryCommandState('insertUnorderedList');
    let isAlignLeft = document.queryCommandState('justifyLeft');
    let isAlignRight = document.queryCommandState('justifyRight');
    let isAlignCenter = document.queryCommandState('justifyCenter');
    let isAlignJust = document.queryCommandState('justifyFull');

		boldButton.classList.toggle("pushed", isBold);
		italicButton.classList.toggle("pushed", isItalic);
		underlineButton.classList.toggle("pushed", isUnderlined);
		strikeThroughButton.classList.toggle("pushed", isStrokeThrough);
		linkButton.classList.toggle("pushed", isALink);
		ulButton.classList.toggle("pushed", isAnOL);
		olButton.classList.toggle("pushed", isAUL);
		jLeftButton.classList.toggle("pushed", isAlignLeft);
		jRightButton.classList.toggle("pushed", isAlignRight);
		jCenterButton.classList.toggle("pushed", isAlignCenter);
		jFullButton.classList.toggle("pushed", isAlignJust);
		
	}

	renderButtons();
	document.addEventListener("selectionchange", toggleButtons);

});


