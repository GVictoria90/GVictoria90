import "./styles.css";
//Boton de "empezar"
let btnEnv = document.getElementById("btnEnv");
//Escuchando el boton de empezar
btnEnv.addEventListener("click", () => {
  let nombreAlumno = prompt("Ingrese el nombre del alumno (vacío para cortar)");
  let notaPractica, notaProblemas, notaTeorica, notaFinal;
  //Mientras el nombre del alumno no este vacío, se ejecuta while
  while (nombreAlumno !== "") {
    //Capturando las tres notas
    notaPractica = Number(prompt("Nota práctica: "));
    notaProblemas = Number(prompt("Nota problemas: "));
    notaTeorica = Number(prompt("Nota teórica: "));

    if (
      //Establece rangos de las notas de 0 a 10
      notaPractica <= 10 &&
      notaPractica >= 0 &&
      notaProblemas <= 10 &&
      notaProblemas >= 0 &&
      notaTeorica <= 10 &&
      notaTeorica >= 0
    ) {
      notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4;
      console.log(
        "La nota final de ",
        nombreAlumno,
        " es: ",
        notaFinal.toFixed(2)
      );
    } else {
      console.log("Error en las notas ingresadas");
    }
    nombreAlumno = prompt("Ingrese el nombre del alumno (vacío para cortar)");
  }
});
