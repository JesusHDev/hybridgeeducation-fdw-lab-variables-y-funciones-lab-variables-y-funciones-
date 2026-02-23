// Ejercicio 10: Inversión de una Cadena
// Declara una función llamada "invertirCadena" que acepte un parámetro "cadena" y retorne la cadena invertida

// Ejemplos:
// invertirCadena("Hola Mundo") // debe retornar "odnuM aloH"
// invertirCadena("anita lava la tina") // debe retornar "anit al aval atina"

function invertirCadena(cadena) {
    /* Explicación de la cadena de métodos:
       1. split(''): Convierte string en array de caracteres.
       2. reverse(): Invierte el orden de los elementos del array.
       3. join(''): Une los elementos de nuevo en un string.
    */
    return cadena.split('').reverse().join('');
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    invertirCadena
};
