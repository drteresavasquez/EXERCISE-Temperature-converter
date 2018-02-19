console.log("converter.js, yo!");

//here I have assigned variable to the form elements submit button and radio button
let output = document.getElementById("convertedTemp");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let input = document.getElementById("userInput");

celsius.addEventListener('keyup', function (pushEnter) {
	//______.which tells javascript which key. 13 = enter. If I put other key codes, that key would work instead.
	if (pushEnter.which === 13) {
		convertThatTemp();
	}
})

fahrenheit.addEventListener('keyup', function (pushEnter) {
	//______.which tells javascript which key. 13 = enter. If I put other key codes, that key would work instead.
	if (pushEnter.which === 13) {
		convertThatTemp();
	}
})


function convertThatTemp() {
	input = Number(input.value);
	if (celsius.checked === false && fahrenheit.checked === false) {
		alert("Please select a conversion, Yo!");
	} else if (celsius.checked) {
		input = parseInt((input - 32) / 1.8);
		if (input > 32) {
			output.innerHTML = `<p class="red">Your converted temp is ${input} Degrees Celsius</p>`;
		} else if (input < 0) {
			output.innerHTML = `<p class="blue">Your converted temp is ${input} Degrees Celsius</p>`;
		} else {
			output.innerHTML = `<p class="green">Your converted temp is ${input} Degrees Celsius</p>`;
		}
	} else if (fahrenheit.checked) {
		input = parseInt((input * 1.8) + 32);
		if (input > 90) {
			output.innerHTML = `<p class="red">Your converted temp is ${input} Degrees Fahrenheit</p>`;
		} else if (input < 32) {
			output.innerHTML = `<p class="blue">Your converted temp is ${input} °F</p>`;
		} else {
			output.innerHTML = `<p class="green">Your converted temp is ${input} °F</p>`;
		}
	}

};

function resetForm() {
	location.reload();
};