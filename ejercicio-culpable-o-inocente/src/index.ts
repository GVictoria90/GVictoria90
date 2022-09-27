import "./styles.css";

//ENUNCIADO EJERCICIO 1
//Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:
//•	En caso afirmativo el usuario responderá si
//•	En caso contrario responderá no.
//•	Si el usuario responde si se escribirá por el documento «irás a la cárcel».
//•	Si el usuario responde no se escribirá por el documento web «irás a casa».
//•	En cualquier caso en el documento web se escribirá «la documentación por favor».

//capturamos elementos del HTML
const nombreU = document.getElementById("datoU") as HTMLInputElement;
const boton = document.getElementById("ingresar") as HTMLButtonElement;
const pedido = document.getElementById("solicitud") as HTMLParagraphElement;
const acusacion = document.getElementById("textoFinal") as HTMLParagraphElement;

boton?.addEventListener("click", () => {
  let user: string = String(prompt("¿Usted es culpable?"));
  pedido.innerText = "la documentacion por favor";

  if (user === "si") {
    acusacion.innerText = `${nombreU.value} iras a la carcel`;
    console.log(`${nombreU.value} iras a la carcel`);
  } else {
    acusacion.innerText = `${nombreU.value} iras a casa`;
    console.log(`${nombreU.value} iras a casa`);
  }
});
//no me imprime en el documento.. el nombre que toma del usuario.. al igual que en la consola me pone[object HTMLInputElement]
//habia hecho lio, no?
//mmm nomas te faltaba lo de html...Element
//y algunas cosas que esdtaba puestas que eran cuando no tenias eso de html...element, que las saque

//ahi ta
//es lo que siempre me falta, que a veces me acuerdo de poner...
//jeje, va a tener que ser lo primero que tengas que revisar
//chi, me di cuenta... porque la gran mayoria de los ejercicios son casi los mismos
//jejeje
//I miss you
//me too ♡ ♡ ♡ 🥰
//ahi estoy mirando otros pero mepa que los tengo que arrancar de cero :()
///mmm oki, avisame cuando los tengas y los vamos revisando
//chi chi
