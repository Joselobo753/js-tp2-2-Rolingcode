/*4- Escribir el código de una función a la que se pasa 
como parámetro un número entero y devuelve como resultado una 
cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función. */
function eje4() {
 
    let numB = Number(prompt("Ingrese un numero para determinar si es par o impar"));
    console.log(numB)
    if (typeof numB === "number" && !isNaN(numB)) {
      console.log("entro en if")
      dete(numB);
     
    } else if ( typeof numB === "number" ){
         alert("No ingreso un valor valido");
  
    }
  }
  
  function dete(num)  {
  
    if (num % 2 === 0) {
      alert("El numero es par");
    } else if (num % 2 === 1) {
      alert("el numero es impar");
    }
  }