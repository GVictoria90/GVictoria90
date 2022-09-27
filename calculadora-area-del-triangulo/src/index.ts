import "./styles.css";

let base = document.getElementById("base") as HTMLInputElement;
let height = document.getElementById("height") as HTMLInputElement;
let btnSend = document.getElementById("btnSend") as HTMLButtonElement;
let resultado = document.getElementById("resultado") as HTMLParagraphElement;

function areaCalc(base: number, height: number): number {
  return (base * height) / 2;
}

function imprimirRes(area: number) {
  let texto = `El Area del Triangulo es ${area}`;
  console.log(texto);
  resultado.innerHTML = texto;
}

btnSend.addEventListener("click", () => {
  let area = areaCalc(Number(base.value), Number(height.value));
  imprimirRes(area);
});
