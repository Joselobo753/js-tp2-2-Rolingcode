/*  Crear un array llamado meses yque almacene el nombre de los doce meses del año. 
 Mostrar por pantalla en forma de lista los doce nombres del arreglo.

Output:
*/

function eje1() {
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  alert("se imprimiran los meses del año");
  const div1 = document.getElementById("eJS1");
  div1.innerHTML = "<h2>Lista de meses</h2><ul>";
  for (let i = 0; i < meses.length; i++) {
    div1.innerHTML += `<li>${meses[i]}</li>`;
  }

  div1.innerHTML += "</ul>";
}

function eje2() {
  alert(
    "A continuacion se le pedira una lista de paises y lugares suele ser muy pesado por eso cree un ejemplo"
  );
  let menu = prompt("Desea ejecturarlo con el ejemplo Y/N");
  let paises = [
    "Nueva York, Estados Unidos",
    "Barcelona, España",
    "Tokio, Japón",
    "Londres, Reino Unido",
    "Roma, Italia",
    "Pekín, China",
    "Río de Janeiro, Brasil",
    "Ámsterdam, Países Bajos",
    "Sídney, Australia",
    "El Cairo, Egipto",
  ];
  if (menu === "n" || menu === "N") {
    paises = "";
    alert("usted es sadico");
  } else if (isNaN(menu) && menu !== "y" && menu !== "Y") {
    alert("usted cancelo o coloco un valor no permitido");
  }
  if (paises === "") {
    do {
      let paisesNew = prompt("ingrese un pais");
      if (paisesNew !== "" && isNaN(paisesNew)) {
        paises.push(paisesNew);
      } else {
        break;
      }
    } while (true);
  }
  let tamano = paises.length;
  let div2 = document.getElementById("eJS2");
  div2.innerHTML = ` <h4>La lista tiene: ${tamano} elementos, que son los siguiente : <h4>`;
  for (let i = 0; i < paises.length; i++) {
    if (i === 0) {
      div2.innerHTML += `<li>Elemento en 1ra posicion : ${paises[i]}</li>`;
    }
    if (i === 2) {
      div2.innerHTML += `<li>Elemento en 3ra posicion : ${paises[i]}</li>`;
    }
    if (i === paises.length - 1) {
      div2.innerHTML += `<li>Elemento en ultima posicion : ${paises[i]}</li>`;
    }
  }
  paises.push("Paris(no se por que pero, asi lo piden)");
  div2.innerHTML += `<li>Elemtento ultimo : ${paises[tamano]}</li>`;
  div2.innerHTML += "</ul>";
  div2.innerHTML += "<h3> La lista de elementos fue : </3> <ul> ";
  for (let i = 0; i < paises.length; i++) {
    if (i === 1) {
      let agre = "Barcelona por que se pide en el ejercicio";
      paises.splice(i, 0, agre);
      div2.innerHTML += `<li> ${paises[i]} (se suma por el ejercicio)</li>`;
    } else {
      div2.innerHTML += `<li>${paises[i]}</li>`;
    }
  }
}
/* 3- Escribir un script que simule el lanzamiento de dos dados.
 Hacer uso de la función Math.random para obtener números aleatorios entre 
 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
  anotar en un array el número de apariciones de dicha suma, 
  repitiendo 50 veces esta operación.*/
function eje3() {
  alert(
    "A continuacion se tiraran 2 dados🎲🎲 y se imprimira por pantalla la suma de ambos"
  );
  let dado1 = [];
  let dado2 = [];
  let apariciones = [];
  for (let i = 0; i < 50; i++) {
    dado1.push(Math.floor(Math.random() * 6 + 1));
    dado2.push(Math.floor(Math.random() * 6 + 1));
    apariciones.push(dado1[i] + dado2[i]);
  }

  let apaDado1 = contarResultados(dado1);

  let apaDado2 = contarResultados(dado2);
  let contApar = contarResultados(apariciones);

  let div3 = document.getElementById("eJS3");
  div3.innerHTML = "<h3> Lista de apareciones y suma de los resultados </h3>";
  div3.innerHTML += `<table> <thead> <tr> <th> Dado 1</th> <th> apariciones </th>  <th> dado 2 </th> <th> apariciones </th> <th> Suma de los dados </th><th> apariciones </th> </thead> <tbody>`;
  let tabla = document.querySelector("tbody");
  tabla.id = "tabla";
  for (let i = 0; i < contApar.length; i++) {
    if (apaDado1[i] === 0) {
      apaDado1[i] = "---";
    }
    if (apaDado2[i] === 0) {
      apaDado2[i] = "---";
    }
    if (contApar[i] === 0) {
      contApar[i] = "---";
    }

    tabla.innerHTML += `<tr>
    <td>${i + 1}</td>
    <td>${apaDado1[i]}</td>
    <td>${i + 1}</td>
    <td>${apaDado2[i]}</td>
    <td>${i + 1}</td>
    <td>${contApar[i]}</td>
    </tr>`;
    if (i === contApar - 1) {
      div3.innerHTML += "</tbody> </table>";
    }
  }
}
function contarResultados(resultado) {
  contar = [];
  for (let i = 0; i < 12; i++) {
    contar.push(0);
    for (let j = 0; j < resultado.length; j++) {
      if (resultado[j] === i) {
        contar[i]++;
      }
    }
  }
  contar.shift();
  return contar;
}
/*4- Escribir el código de una función a la que se pasa 
como parámetro un número entero y devuelve como resultado una 
cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función. */
function eje4() {
  let numB = prompt("Ingrese un numero para determinar si es par o impar");
  if (!isNaN(numB)) {
    determinar(numB);
  } else if (typeof numB === "string" || isNaN(numB)) {
    alert("no ingreso un valor valido");
  }
}
function determinar(numB) {
  if (numB % 2 === 0) {
    alert("El numero es par");
  } else if (numB % 2 === 1) {
    alert("el numero es impar");
  }
}
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
/*6- Solicitar por pantalla al usuario ingresar el valor
de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla. */
function eje6() {
  let ladoA = prompt("Ingrese el lado el primer lado del rectangulo");
  let ladoB = prompt("Ingrese el sengundo lado del rectangulo");
  //crearcuadrado(ladoA,ladoB)
  let div6 = document.getElementById("eJS6")
  calcularPropiedades(ladoA, ladoB,div6);
}
function calcularPropiedades(ladoA, ladoB,div6) {
  ladoA = Number(ladoA)
  ladoB = Number(ladoB)
  let area = ladoA*ladoB
  let perimetro = 2*(ladoA+ladoB)
  let diagonal = Math.sqrt(Math.pow(ladoA,2)+Math.pow(ladoB,2))
  
  div6.innerHTML = `<h3> Estas son las propiedades del triangulo proporcionado</h3><h5>Area</h5><p>El area se calula multiplicando el lado A y el lado B</p><p>En nuestro caso es ${ladoA} por el lado ${ladoB} = ${area}</p>
  <h5>Perimetro</h5>
  <p>El area se calula Sumando dos veces tanto el lado A como  el lado B</p>
  <p>En nuestro caso es el doble de la suma del lado a ${ladoA} con el lado b ${ladoB} = ${perimetro}</p> 
  <h5>Diagonal</h5>
  <p>La diagonal es un tanto mas complicada, es el resultado de la raiz cuadrada del la suma de las potencias de los lados</p>
  <p>En nuestro caso seria: Raiz cuadrada de ( ${ladoA} al cuadrado <b>mas</b> el lado b ${ladoB} al cuadrado ) = ${diagonal}</p>
 `
  
}
/* function crearcuadrado(ladoA,ladoB) {
   let div6 = document.getElementById("eJS6") 
   let divChild6 = document.createElement("div")
   divChild6.id = ("pizzarra")
   divChild6.width = ladoA;
   divChild6.height = ladoB
  

  div6.appendChild(divChild6)

} */

/* 
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
 solo los resultados del 1 al 10 del número elegido por el usuario.
*/
function eje7() {
  let numero = Number(prompt("Ingrese un numero al que desee ver la ta bla de multipliclar"))
  div7 = document.getElementById("eJS7")
  div7.innerHTML = "<h3> Esta es la tabla del 1 al 10 de su numero</h3>" 
  let tabla = document.createElement("table")
  let head = tabla.createTHead()
  let filaHead = head.insertRow()
  let celda1 = document.createElement("th")
  let celda2 = document.createElement("th")
  let celda3 = document.createElement("th")
  celda1.innerHTML = "Numero"
  celda2.innerHTML = "x"
  celda3.innerHTML = "Resultado"
  filaHead.appendChild(celda1)
  filaHead.appendChild(celda2)
  filaHead.appendChild(celda3)
  
  for (let i = 1; i <= 10; i++) {
  let filaCrear = head.insertRow() 
  let celdaNum = filaCrear.insertCell()
  let celdaConst = filaCrear.insertCell()
  let celdaRes = filaCrear.insertCell()
  celdaNum.innerHTML = i
  celdaConst.innerHTML = numero
  celdaRes.innerHTML = i*numero
    
  }
div7.appendChild(tabla)
}
