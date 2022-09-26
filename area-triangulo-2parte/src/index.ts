import "./styles.css";

let resultado = document.getElementById("resultado") as HTMLParagraphElement;



//Boton
let btnEnv = document.getElementById("btnEnv") as HTMLButtonElement;

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  //Capturando los valores de los datos
  let base: number = Number((document.getElementById("dato1") as HTMLInputElement).value);
  let altura: number = Number((document.getElementById("dato2") as HTMLInputElement).value);

  let resultadoArea = (base * altura) / 2;
  resultado.innerHTML = `El area del triangulo es:` + resultadoArea;
});
