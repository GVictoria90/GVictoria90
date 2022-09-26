import "./styles.css";

let resultado = document.getElementById("resultado") as HTMLParagraphElement;

//Boton
let btnEnv = document.getElementById("btnEnv") as HTMLButtonElement;

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  //Capturando los valores de los datos
  let base: number = Number(
    (document.getElementById("dato1") as HTMLInputElement).value
  );
  let exponente: number = Number(
    (document.getElementById("dato2") as HTMLInputElement).value
  );

  let numero: number = 1;
  if (exponente === 0) {
    resultado.innerHTML = "El resultado es :" + numero;
    return (numero = 1);
  } else {
    for (let i = 1; i <= exponente; i++) {
      numero = numero * base;
    }

    resultado.innerHTML = "El resultado es :" + numero;
    return numero;
  }
});
