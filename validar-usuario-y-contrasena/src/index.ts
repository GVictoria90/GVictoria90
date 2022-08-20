import "./styles.css";

let rotulo1 = document.getElementById("rotulo1"); //Toma el primer texto y lo pone en la variable "rotulo1"
let rotulo2 = document.getElementById("rotulo2"); //Toma el segundo texto y lo pone en la variable "rotulo2"
let btnEnv = document.getElementById("btnEnv"); //Toma el boton y lo pone en la variable "btnEnv"
let dato1 = document.getElementById("dato1"); //Toma lo que se ingresa en la primer caja y lo pone en la variable "dato1"
let dato2 = document.getElementById("dato2"); //Toma lo que se ingresa en la segunda caja y lo pone en la variable "dato2"
btnEnv.addEventListener("click", () => {
  //Escucha el Evento de hacer "Click" en el boton y le asina funciones.
  let usuario: string = "juan"; // Declara la Variable usuario y le asigna su valor.
  let clave: string = "claveJuan"; // Declara la Variable clave y le asigna su valor.
  let userIngresado: string = dato1.value; //Asigna el valor ingresado en la caja "dato1" y lo asigna a la variable userIngresado.
  let claveIngresada: string = dato2.value; //Asigna el valor ingresado en la caja "dato2" y lo asigna a la variable claveIngresada.
  if (usuario === userIngresado && clave === claveIngresada) {
    //Declara una condicional: Si usuario igual igual igual a userIngresado y clave es igual igual igual a claveIngresada, entonces:
    console.log("Sus datos son validos, Bienvenido", `${usuario}`); //Se valida el ingresa de manera correcta.
  } else {
    // Si el primer condicional no se valida, entonces:
    console.log("El usuario o la clave son incorrectos"); //Los datos son incorrectos, se restringe su ingreso.
  }
});
