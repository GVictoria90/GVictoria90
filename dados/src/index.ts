import "./styles.css";

let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "Dados";

let btnEnv = document.getElementById("btnEnv");

btnEnv.addEventListener("click", () => {
  //input de dados
  let cantidadDados = document.getElementById("cantidadDados");
  // value del input de datos
  let n: number = cantidadDados.value;

  let probFinal: number = 1;

  //Solucion con for
  // let probCara: number = 1 / 6;
  // for (let contador: number = 1; contador <= n; contador++) {
  //   probFinal = probFinal * probCara;
  // }

  // Otra solucion - math.pow(n° base, potenciador)
  let dados = Math.pow(6, n);
  probFinal = 1 / dados;

  //Dejar solo dos decimales
  let probFinalFixed = probFinal.toFixed(8);

  console.log("La probabilidad es: ", probFinalFixed);
});

