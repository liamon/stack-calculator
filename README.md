# stack-calculator
This was an assignment in First Year in my Next-Generation Technologies module.

The version I handed up had all of the code in one HTML file, with the JavaScript in an inline `<script>` tag in the head.
However, for upload to GitHub I decided to move the JavaScript into two separate .js files.

The original instructions were as follows:
>__Question 1.__  Create a JavaScript function apply(stack, op) for mathematical stack operations where the stack is represented as an array. The function should take as arguments an array of numbers stack and a string op. The elements of the array are called the “stack items”. op can be "+", "-", "\*", "/", "neg" or "sqrt".
>Let n be the arity of the respective operation op. Function apply should return a new array (the "resulting stack") which is the same as stack but with the last n items replaced with the result of the respective operation.
>Examples: if apply is called with arguments \[9,-8.2,7,6.5] and "+", it should return array \[9,-8.2,13.5]. If it would be called with operation "neg" instead of "+", the resulting stack would be \[9,-8.2,7,-6.5].
>
>__Question 2.__ Create a JavaScript program which generates a Web-based user interface for your function apply (Q1).
>
>The stack should be represented on the web page using four input fields (INPUT elements) for text. Each input field contains one stack item (a number) or is empty - that is, the maximum stack size is now 4. Using these fields, the user can enter up to four stack items and using these input fields the user can also see and edit the results of the mathematical operations.
>An additional input field allows the user to enter the operation (+, -, \*, /, neg, sqrt).
>Each time the user clicks on a button "Apply", function apply should be called and the contents of the four stack input fields should be appropriately updated with the resulting stack items (use attribute value to assign new content to an INPUT element).

Note that my answer for Question 1 formed the foundation for the code in `apply.js`.
