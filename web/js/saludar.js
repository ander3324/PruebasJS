/* 
 * Ejemplo de script para el Curso Java 2 - 2015
 */

function saludar() {
    var nom = document.getElementById("nombre").value;
    if (nom.length !== 0) {
        alert('¡Hola ' + nom + '! Bienvenido/a a la programación web.');
    }
    else {
        alert('Has olvidado de ingresar tu nombre...');
    }
}