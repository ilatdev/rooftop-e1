"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var entidades_js_1 = require("./entidades.js");
var ian = new entidades_js_1.Autor("Ian", "Latour", 'Argentina');
var rooftop = new entidades_js_1.Autor("Rooftop", "Academy");
var notaUno = new entidades_js_1.Nota(ian, "Primera nota Ian", "Practicando objetos y clases");
var notaDos = new entidades_js_1.Nota(rooftop, "Nota de Rooftop", "El mate que se enfria");
var notaTres = new entidades_js_1.Nota(ian, "2nda nota Ian", "Practicando x2");
var notaCuatro = new entidades_js_1.Nota(rooftop, "2nda nota Rooftop", "Compota de manzana");
var Libreta = /** @class */ (function () {
    function Libreta() {
        this.notas = [];
    }
    Libreta.prototype.setNewNote = function (nuevaNota) {
        var result = __spreadArray(__spreadArray([], this.notas), [nuevaNota]);
        this.notas = __spreadArray([], result);
    };
    Libreta.prototype.getAllNotes = function () {
        return this.notas;
    };
    Libreta.prototype.notesByLastName = function (lastName) {
        return this.notas.filter(function (item) { return item.autor.lastName == lastName; });
    };
    return Libreta;
}());
var notebook = new Libreta();
notebook.setNewNote(notaUno);
notebook.setNewNote(notaDos);
notebook.setNewNote(notaTres);
notebook.setNewNote(notaCuatro);
var notasLatour = notebook.notesByLastName("Latour");
var todasLasNotas = notebook.getAllNotes();
// console.log(todasLasNotas);
console.log(notasLatour);
