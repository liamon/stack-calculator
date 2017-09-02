function apply(stack, op) {
	var errorMsg = document.getElementById("errorMsg");
	if (errorMsg.hasChildNodes()) { // First time around, errorMsg will have no text and so no childNodes
		errorMsg.removeChild(errorMsg.childNodes[0]); // Clear any past error messages and remove need to declare this in the default
	}
	
	var arg1, arg2, result; // Can declare these variables here to avoid declaring them in each case statement
	arg1 = stack.pop(); // arg1 used in every case so is declared before switch statement, now no need to do it in each case
	while (arg1 == "") {
		arg1 = stack.pop();
	}
	
	if (op != "neg" && op != "sqrt") {
		if (stack[ stack.length - 1 ] == "") {
			errorMsg.textContent = "Error: An input field has been left blank.";
			return; // Prevent "" being pushed onto the stack and making the last filled input field empty
		}
	}
	
	switch (op.toLowerCase()) {
		case '+':
			if (stack.length < 1) { // Needed for this and the next three to ensure there is still one left to get from the stack
				errorMsg.textContent = notEnoughNumbersText(op);
				return;
			}
			arg2 = stack.pop();
			result = parseFloat(arg1) + parseFloat(arg2); // Must parseFloat both or they will be strings and be concatenated
			break;
		
		case '-':
			if (stack.length < 1) {
				errorMsg.textContent = notEnoughNumbersText(op);
				return;
			}
			arg2 = stack.pop();
			result = arg1 - arg2;
			break;
		
		case '*':
			if (stack.length < 1) {
				errorMsg.textContent = notEnoughNumbersText(op);
				return;
			}
			arg2 = stack.pop();
			result = arg1 * arg2;
			break;
		
		case '/':
			if (stack.length < 1) {
				errorMsg.textContent = notEnoughNumbersText(op);
				return;
			}
			arg2 = stack.pop();

			if (arg2 == 0) {
				errorMsg.textContent = "Error: You cannot divide any number by 0.";
				return; // Prevent null being pushed onto the stack and making the last filled input field empty
			}
			result = arg1 / arg2;
			break;

		// My original solution did not include exponentiation since the assignment
		// did not mention it. However, I have decided to add it here to test myself.
		case '^':
			if (stack.length < 1) {
				errorMsg.textContent = notEnoughNumbersText(op);
				return;
			}
			arg2 = stack.pop();
			result = Math.pow(arg1, arg2);
			break;
		
		case 'neg':
			if (arg1 == undefined) {
				// As the while loop earlier on gets rid of empty strings, if all inputs are blank arg1 will be undefined, not ""
				errorMsg.textContent = "Please enter a number.";
				return;
			}
			result = -arg1;
			break;
		
		case 'sqrt':
			if (arg1 < 0) {
				errorMsg.textContent = "Error: Real negative numbers do not have square roots.";
				return;
			}
			if (arg1 == undefined) {
				errorMsg.textContent = "Please enter a number.";
				return;
			}
			result = Math.sqrt(arg1);
			break;
		
		case "":
			errorMsg.textContent = "Please enter one of the operators +, -, *, /, ^, neg or sqrt.";
			return;
		
		default:
			errorMsg.textContent = "Please only enter one of the operators +, -, *, /, ^, neg or sqrt.";
			return;
	}
	
	stack.push(result);
	for (var i = 1; i < 5; i++) {
		var numInput = document.getElementById("num" + i);
		numInput.value = stack[i - 1];
	}
}

// I have split this out into a seperate function for upload to GitHub.
function notEnoughNumbersText(op) {
	return 'Please enter enough numbers for the operator "' + op + '" to operate on.';
}
