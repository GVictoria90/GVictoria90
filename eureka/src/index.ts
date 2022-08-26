import "./styles.css";

let rotulo = document.getElementById("rotulo");
let btnEnv = document.getElementById("btnEnv");
rotulo.innerHTML = "Ingrese la clave, usted posee tres intentos: ";
btnEnv.addEventListener("click", () => {
  let mensaje = document.getElementById("mensaje");
  let contador: number = 1;
  let claveIngresada: string;
  while (contador <= 3 && claveIngresada !== "eureka") {
    claveIngresada = prompt("Introduzca la clave");
    contador++;
  }
  if (claveIngresada === "eureka") {
    mensaje.innerHTML = "Clave valida";
    console.log("Clave valida");
  } else {
    mensaje.innerHTML = "Ya no tenes mas intentos";
    console.log("Ya no tenes mas intentos");
  }
});
