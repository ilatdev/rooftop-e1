import { Nota, Autor } from "./entidades.js";

let ian = new Autor("Ian", "Latour", 'Argentina');
let rooftop = new Autor("Rooftop", "Academy");

let notaUno = new Nota(ian, "Primera nota Ian", "Practicando objetos y clases");
let notaDos = new Nota(rooftop, "Nota de Rooftop", "El mate que se enfria");
let notaTres = new Nota(ian, "2nda nota Ian", "Practicando x2");
let notaCuatro = new Nota(rooftop, "2nda nota Rooftop", "Compota de manzana");

class Libreta {
  notas: Nota[] = [];

  setNewNote(nuevaNota: Nota) {
    let result: Nota[] = [...this.notas, nuevaNota];
    this.notas = [...result];
  }

  getAllNotes() {
    return this.notas;
  }

  notesByLastName(lastName: string) {
    return this.notas.filter((item) => item.autor.lastName == lastName);
  }
}

let notebook = new Libreta();
notebook.setNewNote(notaUno);
notebook.setNewNote(notaDos);
notebook.setNewNote(notaTres);
notebook.setNewNote(notaCuatro);

let notasLatour = notebook.notesByLastName("Latour");
let todasLasNotas = notebook.getAllNotes();

// console.log(todasLasNotas);

console.log(notasLatour);