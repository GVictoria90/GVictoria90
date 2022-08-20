import "./styles.css";

let rotulo = document.getElementById("rotulo"); //Toma el primer texto y lo pone en la variable "rotulo"
let btnEnv = document.getElementById("btnEnv"); //Toma el boton y lo pone en la variable "btnEnv"
rotulo.innerHTML = "Ingrese la posición de llegada del competidor: "; //Toma la etiqueta "rotulo" y le asigna un mensaje.

btnEnv.addEventListener("click", () => {
  //Escucha el Evento de hacer "Click" en el boton y le asina funciones.
  let dato = document.getElementById("dato"); //Toma el valor ingresado en el input y lo guarda en la variable "dato".
  let datoNumber = Number(dato.value); //Covierte el valor de "dato", lo covierte a numero y lo asigna a la variable datoNumber.
  let posicionLlegada: number = datoNumber; //Asigna datoNumber a posicionLlegada.
  switch (
    posicionLlegada //Aplica funcion switch, segun casos (case):
  ) {
    case 1: // Si es 1, se aplica este case.
      console.log("Entregar medalla de oro"); //Muestra mensaje en consola.
      break; //Deteniene la iteracion.
    case 2: // Si es 2, se aplica este case.
      console.log("Entregar medalla de plata"); //Muestra mensaje en consola.
      break; //Deteniene la iteracion.
    case 3: // Si es 3, se aplica este case.
      console.log("Entregar medalla de bronce"); //Muestra mensaje en consola.
      break; //Deteniene la iteracion.
    default:
      // Si no es ninguno de los anteriores, se aplica este case.
      console.log("Entregar mención de participación"); //Muestra mensaje en consola.
  }
});
