function generatePage() {
	addStyle();

	var numHeading = document.createElement("h1");
	var numHeadText = document.createTextNode("Numbers");
	numHeading.appendChild(numHeadText);
	document.body.appendChild(numHeading);
	numForm();
	
	var opHeading = document.createElement("h1");
	var opHeadText = document.createTextNode("Operator");
	opHeading.appendChild(opHeadText);
	document.body.appendChild(opHeading);
	
	var opInput = document.createElement("input");
	opInput.setAttribute("type", "text");
	opInput.setAttribute("id", "op");
	document.body.appendChild(opInput);
	twoLineBreaks();
	
	var btn = document.createElement("button");
	var btnTxt = document.createTextNode("Apply")
	btn.appendChild(btnTxt);
	btn.setAttribute("type", "button");
	btn.setAttribute("onclick", "apply(getStack(), getOp());");
	document.body.appendChild(btn);

	twoLineBreaks();
	var errorMsg = document.createElement("div");
	errorMsg.setAttribute("id", "errorMsg");
	document.body.appendChild(errorMsg);
}

function addStyle() {
	/*
	In my original version of this assignment, I dealt with the style by directly putting in a style
	tag with the CSS rules in the head. However, after the assignment was corrected, I modified it
	to check my understanding and test my knowledge by replacing it with another DOM manipulation,
	the same as the ones right after it in generatePage().
	*/
	var styleTag = document.createElement("style");
	var styleText =
		document.createTextNode('h1 { font-size: 19px; } \
		input[type="number"] { text-align: right; width: 192px; 3} \
		input#op { width: 105px; } \
		#errorMsg { color: red; font-weight: bold; font-size: 18px; }');
	styleTag.appendChild(styleText);
	document.head.appendChild(styleTag);
}

function numForm() {
	for (var i = 1; i < 5; i++) {
		var numInput = document.createElement("input");
		numInput.setAttribute("type", "number"); // Prevents non-numbers from being entered, so no need to have a function to check
		numInput.setAttribute("id", "num" + i);
		document.body.appendChild(numInput);
		
		/* This next bit with the linebreaks is purely to make the page look nicer */
		var br = document.createElement("br");
		document.body.appendChild(br);
		if (i != 4) { // This decreases spacing between last input and next heading
			br = document.createElement("br");
			document.body.appendChild(br);
		}
	}
}

function twoLineBreaks() {
	for (var i = 0; i < 2; i++) {
		var br = document.createElement("br");
		document.body.appendChild(br);
	}
}

function getStack() {
	var stack = [];
	for (var i = 1; i < 5; i++) {
		var numInput = document.getElementById("num" + i);
		stack[i - 1] = numInput.value;
	}
	return stack;
}

function getOp() {
	var opInput = document.getElementById("op");
	var op = opInput.value;
	return op;
}
