
import Libro from "./Libro";
import GestorLibros from "./GestorLibro";
//Crear libros
//Crear una biblioteca de libros
//crear gestor de libros
//ejecutar la funcion todo
//ejecutar la funcion insertar}
//ejecutar la funcion consultar
//ejecutar la funcion modificar
//ejecutar la funcion eliminar

/* Nuestros libros */
let harryPotter:Libro = new Libro('Harry Potter', 'Fantasia', 200, 'J.k. Rowling');
let martinFierro:Libro = new Libro('Martin Fierro', 'Tradicionalista', 200, 'Jose Hernandez');
let señorAnillos:Libro = new Libro('Señor de los anillos', 'Fantasia', 500, 'J. RR Tolkien');

/* Poblar nuestra biblioteca con libros */
let biblioteca = [harryPotter, martinFierro, señorAnillos]
/* Crear nuevo gestor de libros */
let gestor:GestorLibros = new GestorLibros;
let carrie:Libro = new Libro('Carrie', 'Terror', 450, 'Stephen King')

// gestor.insertar(carrie, biblioteca)
// gestor.todo(biblioteca)
// gestor.consultar('Señor de los anillos', biblioteca)
// gestor.modificar('Harry Potter', biblioteca, 'Harry Potter y el prisionero de askaban')
gestor.eliminar('Harry Potter',biblioteca)
gestor.eliminar('Martin Fierro', biblioteca)
gestor.todo(biblioteca)