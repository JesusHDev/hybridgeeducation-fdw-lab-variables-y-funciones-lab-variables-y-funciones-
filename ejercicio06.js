// Ejercicio 6: Conversión de Grados Celsius a Fahrenheit
// Declara una función llamada "celsiusAFahrenheit" que acepte un parámetro "celsius" y retorne la conversión a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}


// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    celsiusAFahrenheit
};
