import "./styles.css";

let btnEnv = document.getElementById("btnEnviar"); //Toma el boton y lo pone en la variable "btnEnv"
let dato1 = document.getElementById("dato"); //Toma lo que se ingresa en la caja y lo pone en la variable "dato"
let dato2 = document.getElementById("dato2"); //Toma lo que se ingresa en la caja 2 y lo pone en la variable "dato2"
let rotulo1 = document.getElementById("rotulo1"); //Toma el primer texto y lo pone en la variable "rotulo1"
let rotulo2 = document.getElementById("rotulo2"); //Toma el segundo texto y lo pone en la variable "rotulo2"
rotulo1.innerHTML = "Ingresar monto: "; // Toma el Lugar del rotulo1 y le asigna un texto.
rotulo2.innerHTML = "Ingresar cantidad: "; // Toma el Lugar del rotulo2 y le asigna un texto.
btnEnv.addEventListener("click", () => {
  //Escucha el Evento de hacer "Click" en el boton y le asina funciones.

  let monto: number = dato1.value; // Al valor de dato1 lo guarda en la variable monto.
  let cantidad: number = dato2.value; // Al valor de dato2 lo guarda en la variable cantidad.
  let montoConDescuento: number = 0; //Declara la variable y la inicializa.
  let descuento: number = 0; //Declara la variable y la inicializa.
  let precioTotal: number = 0; //Declara la variable y la inicializa.
  let montoAhorrado: number = 0; //Declara la variable y la inicializa.

  precioTotal = monto * cantidad; //Realiza la multiplicacion para obtener el precio total y la guarda en la variable precioTotal

  if (precioTotal >= 1000) {
    //Declara una condicional: Si el precioTotal es igual o mayor a 1000, entonces:
    descuento = (precioTotal * 10) / 100; //Se declara el descuento de 10%
    montoConDescuento = precioTotal - descuento; //Declara el precioTotal con el descuento aplicada y lo guarda en la variable montoConDescuento
    montoAhorrado = precioTotal - montoConDescuento; //Declara el monto Ahorrado y lo guarda en la variable montoAhorrado
    console.log("El total de su compra es de: $" + precioTotal); //Muestra en consola el monto total de la compra.
    console.log("Por gastar mas de $1000 tiene un 10% de descuento."); //Muestra en consola un mensaje cuando se aplique un descuento.
    console.log("Con descuento el monto a pagar es: $" + montoConDescuento); //Muestra en consola el monto con el descuento.
    console.log("Usted ha ahorrado: $" + montoAhorrado); //Muestra en consola el monto ahorrado.
  } else {
    console.log("No tiene descuento. El monto a pagar es: " + precioTotal); // Muestra en consola un mensaje, si no se gastan mas de $ 1000
  }
});
