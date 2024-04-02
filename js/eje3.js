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
    console.log(apariciones);
  }

  let apaDado1 = contarResultados(dado1);

  let apaDado2 = contarResultados(dado2);
  let contApar = contarResultados(apariciones);

  let div3 = document.getElementById("eJS3");
  div3.innerHTML = "<h3> Lista de apareciones y suma de los resultados </h3>";
  div3.innerHTML += `<table> <thead> <tr> <th> Dado 1</th> <th> apariciones </th>  <th> dado 2 </th> <th> apariciones </th> <th> Suma de los dados </th><th> apariciones </th> </thead> <tbody>`;
  let tabla = document.querySelector("tbody");
  tabla.id = "tabla";
  let suma = 0;
  /* for (let i = 0; i < contApar.length; i++) {
    if (apaDado1[i] === 0) {
      apaDado1[i] = "---";
    } else {
      suma += apaDado1[i];
    }
    if (apaDado2[i] === 0) {
      apaDado2[i] = "---";
    } else {
      suma += apaDado2[i];
    }
    if (contApar[i] === 0) {
      contApar[i] = "---";
    } else {
      suma += contApar[i];
    }

    tabla.innerHTML += `<tr>
      <td>${i + 1}</td>
      <td>${apaDado1[i]}</td>
      <td>${i + 1}</td>
      <td>${apaDado2[i]}</td>
      <td>${i + 1}</td>
      <td>${contApar[i]}</td>
      </tr>`;
  }
  div3.innerHTML += "</tbody> </table>";
  console.log(suma);
}
function contarResultados(resultado) {
  contar = [];
  suma = 0;
  
  for (let i = 0; i < 12; i++) {
    contar.push(0);
    for (let j = 0; j <= resultado.length; j++) {
      if (resultado[j] === i) {
        contar[i]++;
       
      }
    }
  }
  for (let i = 0; i < contar.length; i++) {
    suma+=contar[i]
    
  }
  console.log(suma);
  console.log(contar)
  return contar;
}*/
  for (let i = 0; i < contApar.length; i++) {
    let sumaDados = i + 2; // El rango de los dados es de 1 a 6, por lo que la suma varía de 2 a 12
    let aparicionesDado1 = apaDado1[i] || "---";
    let aparicionesDado2 = apaDado2[i] || "---";
    let aparicionesTotal = contApar[i] || "---";

    tabla.innerHTML += `<tr>
      <td>${i + 1}</td>
      <td>${aparicionesDado1}</td>
      <td>${i + 1}</td>
      <td>${aparicionesDado2}</td>
      <td>${sumaDados}</td>
      <td>${aparicionesTotal}</td>
    </tr>`;
  }

  div3.innerHTML += "</tbody> </table>";
}

function contarResultados(resultado) {
  let contar = [];

  for (let i = 0; i < 12; i++) {
    contar.push(0);
    for (let j = 0; j < resultado.length; j++) {
      if (resultado[j] === i) {
        contar[i]++;
      }
    }
  }

  return contar;
}
