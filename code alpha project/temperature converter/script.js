function convertCelsiusToFahrenheit() {
	var celsius = document.getElementById("celsius-input").value;
	var fahrenheit = (celsius * 9/5) + 32;
	document.getElementById("fahrenheit-input").value = fahrenheit;
	document.getElementById("output").innerHTML = celsius + " °C = " + fahrenheit + " °F";
}

function convertFahrenheitToCelsius() {
	var fahrenheit = document.getElementById("fahrenheit-input").value;
	var celsius = (fahrenheit - 32) * 5/9;
	document.getElementById("celsius-input").value = celsius;
	document.getElementById("output").innerHTML = fahrenheit + " °F = " + celsius + " °C";
}
