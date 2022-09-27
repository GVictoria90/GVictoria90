import "./styles.css";

let btn = document.getElementById("btn") as HTMLButtonElement;
let promedio: number = 0;

//Genera un número aleatorio entre min y max
function aleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Carga los numeros aleatorios al arreglo donde estan guardadas las edades.
//ACA, donde dice numArreglo: number[]
function cargarArreglo(numArreglo: number[], dimArreglo: number) {
  for (let i = 0; i < dimArreglo; i++) {
    numArreglo.push(aleatorio(3, 7));
  }
}

//Genera la operacion matematica para sacar promedio entre edades.
//Y ACA tambien
function obtenerPromedio(numArreglo: number[], dimArreglo: number): void {
  for (let i = 0; i < dimArreglo; i++) {
    promedio = promedio + numArreglo[i];
  }
  promedio = promedio / dimArreglo;
}

//Muestra por consola el arreglo y el promedio de las edades.
function mostrarArreglo(numArreglo: number[], dimArreglo: number) {
  console.log(`las edades de los ${dimArreglo} niños son: ${numArreglo}`);
  console.log(`El promedio de edades es de: ${promedio.toFixed(2)}`);
}

btn.addEventListener("click", () => {
  let dimArreglo: number = Number(prompt(`Indique la cantidad de jugadores: `));
  let numArreglo: number[] = [];

  aleatorio(3, 7);
  cargarArreglo(numArreglo, dimArreglo);
  obtenerPromedio(numArreglo, dimArreglo);
  mostrarArreglo(numArreglo, dimArreglo);
});
