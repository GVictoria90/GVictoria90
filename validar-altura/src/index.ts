import "./styles.css";
let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "Indique la altura de la persona en cm: ";
btnEnv.addEventListener("click", () => {
  let alturaPermitida: number = 129;
  let alturaPersona: number = dato.value;
  if (alturaPersona <= alturaPermitida) {
    console.log("Hace falta medir al menos 130 cm para ingresar");
    console.log(
      "La persona mide",
      `${alturaPersona}`,
      "cm no puede subir al juego"
    );
  } else {
    console.log("La persona puede subir al juego");
  }
});








}
