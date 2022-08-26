import "./styles.css";

let rotulo = document.getElementById("rotulo");
let btnEnv = document.getElementById("btnEnv");
rotulo.innerHTML =
  "Números que son múltiplos de 2 o de 3 que hay entre 1 y 100: ";
btnEnv.addEventListener("click", () => {
  let cadena: string = "";
  for (let numero = 1; numero <= 100; numero++) {
    if (numero % 2 === 0 || numero % 3 === 0) {
      cadena = cadena + numero + "\n";
    }
  }
  console.log(cadena);
});
