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