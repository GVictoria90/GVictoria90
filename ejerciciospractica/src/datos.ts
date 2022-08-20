import "./styles.css";
document.getElementsByClassName("texto-prueba").innerHTML = `
<h1>Hello Vanilla!</h1> dato.value
`;
let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");
btnEnv.addEventListener("click" , () => {
  let datoNumerico : number = Number(dato.value)
console.log("el dato ingresado es ",datoNumerico);
//}
});