import "./styles.css";

//1-aca agarro el boton (el elemento html), para agregarle lo del evento
let button = document.getElementById("btnEnviar");

//2-esta funcion lo que hace es agarrar el pedazo de html donde se va a cambiar el valor
//por el numero mas grande
function printOnHTML(content: string): void {
  let p = document.getElementById("paragraph") as HTMLParagraphElement;
  p.innerText = content;
}

//3-esta es la funcion que va a agarrar los 3 valores que pongas y los va a comparar, lo de agarrar los valores
//se puede sacar a otra funcion
//cuando termina, imprime cual es el mas grande
function compare(): void {
  //aca voy a guardar el numero mas grande
  let biggestNumber: string;
  //aca agarro cada valor de cada input
  let num1: string = (document.getElementById("numero1") as HTMLInputElement)
    .value;
  let num2: string = (document.getElementById("numero2") as HTMLInputElement)
    .value;
  let num3: string = (document.getElementById("numero3") as HTMLInputElement)
    .value;
  //aca compara si el 1er numero es el mas grande
  if (num1 > num2 && num1 > num3) {
    biggestNumber = num1;
    //si el primero no es el mas grande, quedan el 2do y el 3ro para comparar nomas
  } else if (num2 > num3) {
    biggestNumber = num2;
    //y aca si o si el 3ro seria el mas grande
  } else {
    biggestNumber = num3;
  }
  //aca le agrega el texto al final 'es el mas grande'
  biggestNumber += " is the biggest number";
  //console.log(biggestNumber);
  printOnHTML(biggestNumber);
}

//4-aca le agrego el evento al boton, lo tengo que poner luego de la funcion porque no se puede
//llamar a algo que todavia no se creo, no podes llamar a compare hasta que no lo hayas escrito,
//por eso lo puse aca
button?.addEventListener("click", compare);

//Cambie el tipo para que no solo se pueda ingresar numeros, si no tambien toma letras
