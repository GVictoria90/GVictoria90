let number = document.getElementById("numero-multiplicar") as HTMLInputElement;
let hastaNumero = document.getElementById("hasta-numero") as HTMLInputElement;
let button = document.getElementById("btnEnv") as HTMLButtonElement;
let tabla = document.getElementById("tabla") as HTMLTableElement;

function imprimirTabla(): void {
  tabla.innerHTML = "";
  if (number.value && hastaNumero.value) {
    let n1 = Number(number.value);
    let n2 = Number(hastaNumero.value);
    let myHeader = tabla.createTHead();
    let myHRow = myHeader.insertRow(0);
    let myHCell1 = myHRow.insertCell(0);
    let myHCell2 = myHRow.insertCell(1);
    myHCell1.innerHTML = "X";
    myHCell2.innerHTML = "Tabla del " + n1;
    let myBody = tabla.createTBody();
    for (let index = 1; index <= n2; index++) {
      let myBRow = myBody.insertRow(-1);
      let myBCell1 = myBRow.insertCell(0);
      let myBCell2 = myBRow.insertCell(1);
      myBCell1.innerHTML = "" + index;
      myBCell2.innerHTML = "" + n1 * index;
    }
  }
}

button.addEventListener("click", imprimirTabla);
