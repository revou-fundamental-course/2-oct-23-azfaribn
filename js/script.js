// Function to convert Celsius to Fahrenheit
 function celsiusToFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Function to convert Celsius to Fahrenheit and display result
function convertToCelsius() {
  var celsius = parseFloat(document.getElementById("celsiusInput").value);
  var fahrenheit = celsiusToFahrenheit(celsius);
  document.getElementById("fahrenheitInput").value = fahrenheit;
}

// Function to convert Fahrenheit to Celsius and display result
function convertToFahrenheit() {
  var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
  var celsius = fahrenheitToCelsius(fahrenheit);
  document.getElementById("celsiusInput").value = celsius;
}

// Function to reset the input fields
function reset() {
  document.getElementById("celsiusInput").value = "";
  document.getElementById("fahrenheitInput").value = "";
}