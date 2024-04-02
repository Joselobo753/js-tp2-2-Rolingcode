/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
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