import "./styles.css";

let resultado = document.getElementById("resultado") as HTMLParagraphElement;

//Boton
let btnEnv = document.getElementById("btnEnv") as HTMLButtonElement;

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  let resultadoArea = "";
  for (let index = 1; index <= 7; index++) {
    resultadoArea +=
      "Area de " + index + "x" + index * 2 + ": " + (index * (index * 2)) / 2;
    if (index !== 7) {
      resultadoArea += "<br>";
    }
  }

  resultado.innerHTML = resultadoArea;
});
