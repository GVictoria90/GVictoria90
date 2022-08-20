import "./styles.css";

let llegadaColectivo;

console.log("Esperando el colectivo");
llegadaColectivo = prompt("Llego el colectivo? (Y/N): ").toUpperCase();

while (llegadaColectivo == "N") {
  console.log("Esperando el colectivo");
  llegadaColectivo = prompt("Llego el colectivo? (Y/N): ").toUpperCase();
}
console.log("Llego el colectivo");
