function eje2() {
    alert(
      "A continuacion se le pedira una lista de paises y lugares suele ser muy pesado por eso cree un ejemplo"
    );
    let menu = confirm("Desea ejecturarlo con el ejemplo");
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
    if(!menu){
        paises =[]
        alert("Se borro la lista de paises, Sadico")
    }
    
    if (paises.length === 0) {
      do {
        let paisesNew = prompt("ingrese un pais");
        if (paisesNew === null || paisesNew==="") {
          break
        } else {
            paises.push(paisesNew);
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