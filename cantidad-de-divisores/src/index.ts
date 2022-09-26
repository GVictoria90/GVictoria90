import "./styles.css";


let resultado = document.getElementById("resultado") as HTMLParagraphElement;



//Boton
let btnEnv = document.getElementById("btnEnv") as HTMLButtonElement;

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  //Capturando los valores de los datos
  let numero: number = Number((document.getElementById("dato1") as HTMLInputElement).value);

  function esMultiplo(base: number, multiplo: number) {
    let result = base % multiplo === 0;
    return result;
  }
  let listadoDivisores: number[] = [];
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor <= numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      //Agrego al array el n° divisor
      listadoDivisores.push(divisor);
      //Aumento cantidad n° de divisores
      cantidad = listadoDivisores.length;
    }
  }
  resultado.innerHTML = ` ${numero} posee ${cantidad} de divisores: ${listadoDivisores}`;
  return cantidad;
});

