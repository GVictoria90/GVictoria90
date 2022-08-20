import "./styles.css";


let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let btnEnv = document.getElementById("btnEnv");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
btnEnv.addEventListener("click", () => {
  let usuario: string = "juan";
  let clave: string = "claveJuan";
  let userIngresado: string = dato1.value;
  let claveIngresada: string = dato2.value;
  if (usuario === userIngresado && clave === claveIngresada) {
    console.log("Sus datos son validos, Bienvenido", `${usuario}`);
  } else {
    console.log("El usuario o la clave son incorrectos");
  }
});
