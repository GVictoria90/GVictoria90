import "./styles.css"; //Archi que importa las caracteristicas de css, por primera vez usados.

let dato1 = document.getElementById("dato1") as HTMLInputElement;
let dato2 = document.getElementById("dato2") as HTMLInputElement;
let operacion = document.getElementById("operacion") as HTMLInputElement;
let resultado = document.getElementById("resultado") as HTMLParagraphElement;
//Se "trae" el boton y se asigna a una nueva variable.
let btnEnv = document.getElementById("btnEnv") as HTMLButtonElement;

function dibujarGuiones(): string {
  let aux = "";
  for (let index = 0; index < 40; index++) {
    aux += "-";
  }
  return aux;
}

function calcular(number1: number, number2: number, operation: string): number {
  if (operation === "1") {
    return number1 + number2;
  } else if (operation === "2") {
    return number1 - number2;
  }
  return -1;
}

function obtenerValorNumerico(elementoInput: HTMLInputElement): number {
  if (elementoInput.getAttribute("type") === "number") {
  }
  return Number(elementoInput.value);
}

function obtenerValorString(elementoInput: HTMLInputElement): string {
  if (elementoInput.getAttribute("type") === "text") {
  }
  return elementoInput.value;
}

//Se asigna el escuchador de eventos al boton.
btnEnv.addEventListener("click", () => {
  //Se asigna el resultado a una variable.
  let texto =
    dibujarGuiones() +
    "el resultado es: " +
    calcular(
      obtenerValorNumerico(dato1),
      obtenerValorNumerico(dato2),
      obtenerValorString(operacion)
    ) +
    dibujarGuiones();

  resultado.innerHTML = texto; // Asigna un valor a resultado.
  console.log(texto); // Imprime en consola el resultado con su mensaje correspondiente.
});
//estaba mirando tambien el otro ejercicio qiue es como este y nunca se guardaron los cambios :/
//y en este que tenes que hacer? porque es igual
//implementar en esta calculadora el uso del css
//y de que manera?
//no encuentro el ejercicio lpm
//
