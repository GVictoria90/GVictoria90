import "./styles.css";

//Boton
let btnEnv = document.getElementById("btnEnv") as HTMLButtonElement;

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  //Capturando los valores de los datos

  let dato1: number = Number(
    (document.getElementById("dato1") as HTMLInputElement).value
  );
  let dato2: number = Number(
    (document.getElementById("dato2") as HTMLInputElement).value
  );
  let operacion: string = (document.getElementById(
    "operacion"
  ) as HTMLInputElement).value;
  let resultado = document.getElementById("resultado") as HTMLParagraphElement;
  //Dibuja Lineas

  let linea = "-";
  for (let i = 0; i <= 40; i++) {
    linea = linea + "-";
  }
  if (operacion === "1") {
    console.log(linea);
    resultado.innerHTML = "el resultado es: " + (Number(dato1) + Number(dato2));
    console.log("el resultado es: ", Number(dato1) + Number(dato2));
    console.log(linea);
  } else if (operacion === "2") {
    console.log(linea);
    resultado.innerHTML = "el resultado es: " + (Number(dato1) - Number(dato2));
    console.log("el resultado es: ", Number(dato1) - Number(dato2));
    console.log(linea);
  }
});

//este es el primero bebito
//oki! pero este ya estaria listo por lo que veo
//lo queres probar vos?
//no funca, estoy queriendo hacer la suma pero no pasa nada, habre puesto algo mal en el html?
