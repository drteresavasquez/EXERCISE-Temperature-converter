console.log("converter.js, yo!");

let output = document.getElementById("convertedTemp");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let input = document.getElementById("userInput");
let button = document.getElementById("submit");

window.addEventListener('keyup', function (e) {
	if (e.which === 13 && celsius.checked) {
		e.preventDefault();
		convertThatTemp(Number(input.value), "celsius");
	}else if(e.which === 13 && fahrenheit.checked){
		e.preventDefault();
		convertThatTemp(Number(input.value), "fahrenheit");
	}
});

button.addEventListener('click', function(e){
	if (celsius.checked) {
		e.preventDefault();
		convertThatTemp(Number(input.value), 'celsius');
	}else if(fahrenheit.checked){
		e.preventDefault();
		convertThatTemp(Number(input.value), 'fahrenheit');
	}else{
		alert("Please select a conversion, Yo!");
	}
});

function convertThatTemp(val, conversion) {
	switch(conversion){
		case 'celsius':
		val = val / 1.8;
		val > 32 ? output.innerHTML = `<p class="red">Your converted temp is ${val} Degrees Celsius</p>` : val< 0 ? output.innerHTML = `<p class="blue">Your converted temp is ${val} Degrees Celsius</p>` : output.innerHTML = `<p class="green">Your converted temp is ${val} Degrees Celsius</p>`

		case 'fahrenheit':
		val = (val * 1.8) + 32;
		val > 90 ? output.innerHTML = `<p class="red">Your converted temp is ${val} Degrees Fahrenheit</p>` : val < 32 ? output.innerHTML = `<p class="blue">Your converted temp is ${val} °F</p>` : output.innerHTML = `<p class="green">Your converted temp is ${val} °F</p>`
	}
};

function resetForm() {
	location.reload();
};