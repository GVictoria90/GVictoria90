import "./styles.css";

//Se obtienen elementos necesarios (input de donde viene el numero, boton para enviar numero, h2 para cargar resultado)
let numeroIngresado = document.getElementById(
  "numeroIngresado"
) as HTMLInputElement;
let boton = document.getElementById("botonEnviarNumero") as HTMLButtonElement;
let resultado = document.getElementById("resultado") as HTMLHeadingElement;

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
    numeros.push(Number(numeroIngresado.value));
    numeroIngresado.value = "";
    console.log(numeros);

    if (numeros.length === MAXNUMEROS) {
      promediarNumeros();
      numeros = [];
    }
  }
}

boton?.addEventListener("click", agregarNumeros);
