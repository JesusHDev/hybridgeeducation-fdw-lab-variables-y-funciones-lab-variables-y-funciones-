// Ejercicio 7: Comprobación de Número Par
// Declara una función llamada "esPar" que acepte un parámetro "numero" y retorne verdadero si el número es par, de lo contrario falso
function esPar(numero) {
    // El operador residuo (%) verifica si la división por 2 es exacta
    return numero % 2 === 0;
}


// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    esPar
};
