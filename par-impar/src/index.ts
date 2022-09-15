import "./styles.css";

let btnEnv = document.getElementById("btnEnv");

rotulo.innerHTML = "Ingrese el primer número: ";
rotulo2.innerHTML = "Ingrese el segundo número: ";

btnEnv.addEventListener("click", () => {
  let dato1 = document.getElementById("dato1");
  let dato2 = document.getElementById("dato2");

  let primerNum: number = dato1.value;
  let segundoNum: number = dato2.value;

  let actual, suma, aux: number;
  actual = primerNum;

  if (primerNum > segundoNum) {
    aux = primerNum;
    primerNum = segundoNum;
    segundoNum = aux;
  }
  suma = 0;

  if (primerNum !== segundoNum) {
    for (
      let actual: number = Number(primerNum);
      actual <= Number(segundoNum);
      actual++
    ) {
      suma = suma + actual;
    }
    console.log("El resultado de la suma es: ", suma);
  } else {
    console.log("No es posible realizar la operacion");
  }
});
