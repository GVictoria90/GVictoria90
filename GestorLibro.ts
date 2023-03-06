import Libro from "./Libro";
class GestorLibros {
    constructor() {
    }

    insertar(libro:Libro, biblioteca: Array<Libro>): boolean {
        if (libro==null) {
            return false;
        }
        biblioteca.push(libro);
        return true;
    }

    consultar(tituloLibro:string, biblioteca: Array<Libro>): Libro {
        if (tituloLibro===null || tituloLibro==="") {
            return new Libro("", "", 0, "");
        }
        biblioteca.forEach(lib => {
            if (lib.nombre===tituloLibro) {
                return lib;
            }
        });
        return new Libro("", "", 0, "");
    }

    modificar(tituloLibro:string, biblioteca: Array<Libro>): boolean {
        if (tituloLibro===null || tituloLibro==="") {
            return false;
        }
        let auxLibro = this.consultar(tituloLibro, biblioteca);
        let index = biblioteca.indexOf(auxLibro);
        if (index > -1) {
            biblioteca[index]=auxLibro;
            return true;
        }
        return false;
    }

    eliminar(tituloLibro:string, biblioteca: Array<Libro>): boolean {
        if (tituloLibro===null || tituloLibro==="") {
            return false;
        }
        let index = biblioteca.indexOf(this.consultar(tituloLibro, biblioteca));
        if (index > -1) {
            biblioteca.splice(index, 1);
            return true;
        }
        return false;
    }

    todo(biblioteca: Array<Libro>): void {
        if (biblioteca===null || biblioteca.length<1) {
            return;
        }
        if (biblioteca.length==0) {
            return;
        }
        biblioteca.forEach(libro => {
            console.log(libro.toString() + '\n');
        });
    }
}

export default GestorLibros;