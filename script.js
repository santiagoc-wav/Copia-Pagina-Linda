//Este es el JavaScript de tu sitio. Puedes agregar interactividad y procesar datos.
/* Si te sientes con ganas de chicanear puedes meterle mano al JavaScript */

// Así se comenta código en JS
/*
Así también puedes comentar varias líneas seguidas.
*/


console.log("Este es un mensaje de conosola y dice: ¡Hola, mundo!");
// Para ver la consolsa usa los menús o haz clic derecho en la página y escoje "Inspeccionar" y luego "Consola"
 
// Haz que el botón de "Haz clic aquí" se mueva cuando sea cliceado

const btn = document.querySelector("button"); // Reconoce el botón desde la página

// Detecta clics en la página
if (btn) {
  btn.onclick = function () {
    // El JS trabaja en conjunción con el código 'hundir' de tu CSS
    btn.classList.toggle("hundir");
  };
}
