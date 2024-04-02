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