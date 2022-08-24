import "./styles.css";

//Se obtienen elementos necesarios (input de donde viene el numero, boton para enviar numero, h2 para cargar resultado)
let numeroIngresado = document.getElementById(
  "numeroIngresado"
) as HTMLInputElement;
let boton = document.getElementById("botonEnviarNumero") as HTMLButtonElement;
let resultado = document.getElementById("resultado") as HTMLHeadingElement;
// Aca agarro el elemento h5 para pasarle los numeros que faltan
let numRest = document.getElementById("numRest") as HTMLHeadingElement;

//se declaran variables para: guardas los 10 numeros, y la suma
let numeros: number[] = [];
const MAXNUMEROS = 10;

//Funcion para imprimir en pagina el resultado
function imprimirResultado(total: number): void {
  resultado.innerText = String(total);
}

//Funcion para obtener el promedio de los 10 numeros
function promediarNumeros(): void {
  let suma = 0;
  for (let index = 0; index < numeros.length; index++) {
    suma += numeros[index];
  }
  suma = suma / MAXNUMEROS;
  imprimirResultado(suma);
}

//Funcion para agregar los numeros al arreglo (hasta 10 numeros), o imprimir el promedio (si ya hay 10)
function agregarNumeros(): void {
  if (numeros.length < MAXNUMEROS) {
    let auxNum = Number(numeroIngresado.value);
    numeros.push(auxNum);
    // Aca paso los numeros que faltan, a 10 le resto los numeros que se ingresaron
    numRest.innerText =
      "Faltan " + String(MAXNUMEROS - numeros.length) + " numeros";
    numeroIngresado.value = "";
    console.log(numeros, auxNum);

    if (numeros.length === MAXNUMEROS) {
      promediarNumeros();
      numeros = [];
    }
  }
}

boton?.addEventListener("click", agregarNumeros);
