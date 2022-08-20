import "./styles.css";

let rotulo = document.getElementById("rotulo"); //Toma el primer texto y lo pone en la variable "rotulo"
let btnEnv = document.getElementById("btnEnv"); //Toma el boton y lo pone en la variable "btnEnv"
rotulo.innerHTML = "Ingrese la posición de llegada del competidor: "; //Toma la etiqueta "rotulo" y le asigna un mensaje.

btnEnv.addEventListener("click", () => {
  //Escucha el Evento de hacer "Click" en el boton y le asina funciones.
  let dato = document.getElementById("dato"); //Toma el valor ingresado en el input y lo guarda en la variable "dato".
  let posicionLlegada: number = dato.value; //Toma el valor de dato y lo guarda en la variable posicionLlegada.
  console.log(typeof posicionLlegada); //Muestra en consola el tipo de dato asigando a posicionLlegada.
  let posicionLlegadaNumber: number = Number(posicionLlegada); //Covierte el valor de posicionLlegada a numero y lo guarda en la variable posicionLlegadaNumber.
  console.log(typeof posicionLlegadaNumber); //Muestra en consola el tipo de dato asigando a posicionLlegadaNumber.
  if (posicionLlegadaNumber === 1) {
    //Declara una condicional: Si posicionLlegadaNumber es estrictamente igual a 1, entonces:
    console.log("Entregar medalla de oro"); //Muestra mensaje en consola.
  } else {
    //Si no se cumple la primera condicion, entonces:
    if (posicionLlegadaNumber === 2) {
      //Declara una condicional: Si posicionLlegadaNumber es estrictamente igual a 2, entonces:
      console.log("Entregar medalla de plata"); //Muestra mensaje en consola.
    } else {
      //Si no se cumple ni la primera, ni la segunda condicion, entonces:
      if (posicionLlegadaNumber === 3) {
        //Declara una condicional: Si posicionLlegadaNumber es estrictamente igual a 3, entonces:
        console.log("Entregar medalla de bronce"); //Muestra mensaje en consola.
      } else {
        //Si no se cumple ninguna de las condiciones, entonces:
        console.log("Entregar mención de participación"); //Muestra mensaje en consola.
      }
    }
  }
});
