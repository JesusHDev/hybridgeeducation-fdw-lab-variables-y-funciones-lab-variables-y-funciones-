// Ejercicio 2: Uso de Constantes en Funciones
// Declara una función llamada "obtenerPI" que retorne el valor 3.1416
function obtenerPI() {
    // 'const' garantiza que la ligadura de la variable no sea reasignada
    const PI = 3.1416;
    return PI;
}


// No modificar
// Exporta la función para que pueda ser utilizada en otros archivos
// Como ves, tu función debe tener el nombre obtenerPI
module.exports = {
    obtenerPI
};
