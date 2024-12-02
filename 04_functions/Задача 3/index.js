const celsiusToFahrenheit = (c) => c * 1.8 + 32

const fahrenheitToCelsius = (f) => (f - 32) / 1.8

console.log(celsiusToFahrenheit(25))

console.log(fahrenheitToCelsius(77))

console.log(celsiusToFahrenheit(0))

console.log(celsiusToFahrenheit(100))