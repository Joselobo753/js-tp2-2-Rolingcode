/* 5- Definir una función que muestre información sobre una cadena 
de texto que se le pasa como argumento. A partir de la cadena que se le pasa,
la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas
o por una mezcla de ambas.
*/
function eje5() {
    let cadena = prompt("ingrese una cadena de texto");
    let vocal = vocales(cadena);
    let espa = espacios(cadena);
    let comparar = determinar(cadena);
    alert(`La cadena cuenta con ${vocal} vocales y ${espa} espacios.
    ${comparar}`);
  }
  function vocales(cadena) {
    let vocal = 0;
  
    for (let i = 0; i < cadena.length; i++) {
      switch (cadena[i]) {
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
          vocal++;
          break;
        case " ":
          espacios++;
        default:
          break;
      }
    }
    return vocal;
  }
  function espacios(cadena) {
    let espaci = 0;
    for (let i = 0; i < cadena.length; i++) {
      switch (cadena[i]) {
        case " ":
          espaci++;
        default:
          break;
      }
      return espaci;
    }
  }
  function determinar(cadena) {
    let contarMay = 0;
    let contarMin = 0;
    let resultado = "";
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === cadena[i].toUpperCase()) {
        contarMay++;
      } else if (cadena[i] === cadena[i].toLowerCase()) {
        contarMin++;
      }
    }
    if (cadena.length === contarMay) {
      resultado = "Toda la cadena esta escrita en mayusculas";
    } else if (cadena.length === contarMin) {
      resultado = "Toda la cadena esta escrita en minusculas";
    } else {
      resultado = `La cadena es mixta y tiene ${contarMay} mayusculas y ${contarMin} minusculas`;
    }
    return resultado;
  }