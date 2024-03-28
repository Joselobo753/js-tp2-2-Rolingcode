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
 if (menu === "n" || menu==="N") {
    paises = ""
    alert("usted es sadico")
  } else if(isNaN(menu) && menu!=="y" && menu!=="Y"){
    alert("usted cancelo o coloco un valor no permitido")
  }

  if (paises==="") {
    do {
    let  paisesNew = prompt("ingrese un pais")
        if (paisesNew!=="" && isNaN(paisesNew)) {
            paises += paisesNew
        } else{
            break;
        }
    } while (true);
    

  } 
  let tamano = paises.length
  let div2 = document.getElementById("eJS2")
  div2.innerHTML = ` <h4>La lista tiene: ${tamano} elementos, que son los siguiente : <h4>`
  for (let i = 0; i < paises.length; i++) {
    if (i===0) {
        div2.innerHTML += `<li>Elemento en 1ra posicion : ${paises[i]}</li>`;
    }
    if (i===2) {
        div2.innerHTML += `<li>Elemento en 3ra posicion : ${paises[i]}</li>`;
    }
    if (i===paises.length-1) {
        div2.innerHTML += `<li>Elemento en ultima posicion : ${paises[i]}</li>`;
    }
   
  }
  paises.push("Paris(no se por que pero, asi lo piden)")
  div2.innerHTML +=`<li>Elemtento ultimo : ${paises[tamano]}</li>`
  div2.innerHTML += "</ul>";
  div2.innerHTML += "<h3> La lista de elementos fue : </3> <ul> "
  for (let i = 0; i < paises.length; i++) {
     
    if (i===1) {
        let agre = "Barcelona por que se pide en el ejercicio"
        paises.splice(i,0,agre)
        div2.innerHTML += `<li> ${paises[i]} (se suma por el ejercicio)</li>`;
    }else{
        div2.innerHTML += `<li>${paises[i]}</li>`
    }
   
  }
}

