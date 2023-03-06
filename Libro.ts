class Libro {
    nombre: String;
    genero: String;
    paginas: number;
    autor: String;
    constructor(nombre: String, genero: String, paginas:number, autor: String) {
        this.nombre = nombre,
        this.genero = genero,
        this.paginas = paginas,
        this.autor = autor
    }

    toString():String {
        return this.nombre + '| ' + this.genero + '| ' + this.paginas + '| ' + this.autor
    }
}

export default Libro;