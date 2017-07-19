console.log("converter.js, yo!");

// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// If the temperature is > than 90F/32C the color of the converted temperature should be red.
// If the temperature is < than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.



// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion. 


//here I have assigned variable to the form elements submit button and radio button
let output = document.getElementById("convertedTemp");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let input = document.getElementById("userInput");


function convertThatTemp() {
            	 input = Number(input.value);
            	if (celsius.checked === false && fahrenheit.checked === false){
            		alert("Please select a conversion, Yo!");
            	}
	            	else if (celsius.checked){
					    input = parseInt((input - 32)/1.8);
					    	if (input > 32){
					    		output.innerHTML = `<p class="red">Your converted temp is ${input}</p>`;
					    	}
					    	else if(input < 0){
					    		output.innerHTML = `<p class="blue">Your converted temp is ${input}</p>`;
					    	}else {
					    		output.innerHTML = `<p class="green">Your converted temp is ${input}</p>`;
					    	}
				}
					else if(fahrenheit.checked) {
					   	input = parseInt((input * 1.8)+ 32);
					   		if (input > 90){
					    		output.innerHTML = `<p class="red">Your converted temp is ${input}</p>`;
					    	}
					    	else if(input < 32){
					    		output.innerHTML = `<p class="blue">Your converted temp is ${input}</p>`;
					    	}else {
					    		output.innerHTML = `<p class="green">Your converted temp is ${input}</p>`;
					    	}
				}
    		
};


//Anynomous function because we didn't name it, we embedded a function instead. AKA lamda.
//this function makes it so when you type in the input box, it changes the text in the output
input.addEventListener("keyup", function(submit){
	// console.log("placeholder2", placeholder2);

	
});

function resetForm(){
            input.value = "";
};



























