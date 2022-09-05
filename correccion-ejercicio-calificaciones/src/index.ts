let nombreAlumno = document.getElementById("nombre-alumno") as HTMLInputElement;
let notaPractica = document.getElementById("nota-practica") as HTMLInputElement;
let notaProblemas = document.getElementById(
  "nota-problemas"
) as HTMLInputElement;
let notaTeorica = document.getElementById("nota-teorica") as HTMLInputElement;
let button = document.getElementById("btnEnv") as HTMLButtonElement;
let table = document.getElementById("table") as HTMLTableElement;

function calcularPromedio() {
  let promedio = 0;
  let nPract = Number(notaPractica.value);
  let nProb = Number(notaProblemas.value);
  let nTeor = Number(notaTeorica.value);
  if (nombreAlumno.value.length > 0) {
    if (nPract && nProb && nTeor) {
      if (
        nPract >= 0 &&
        nPract <= 10 &&
        nProb >= 0 &&
        nProb <= 10 &&
        nTeor >= 0 &&
        nTeor <= 10
      ) {
        promedio = nPract * 0.1 + nProb * 0.4 + nTeor * 0.5;
        console.log(
          "El promedio del alumno " + nombreAlumno.value + " es " + promedio
        );
      } else {
        console.log(
          "Todas las notas deben estar entre 0 y 10. Intente nuevamente"
        );
      }
    } else {
      console.log("Ingrese todas las notas");
    }
  } else {
    console.log("Por favor escriba el nombre del alumno");
  }
}

button.addEventListener("click", calcularPromedio);
