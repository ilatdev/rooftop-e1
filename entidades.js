"use strict";
// Entidades Autor y Nota
exports.__esModule = true;
exports.Nota = exports.Autor = void 0;
var Autor = /** @class */ (function () {
    function Autor(name, lastname, country) {
        this.firstName = name;
        this.lastName = lastname;
        this.country = country || "unknown";
    }
    Autor.prototype.getFirstName = function () {
        return this.firstName;
    };
    Autor.prototype.getLastName = function () {
        return this.lastName;
    };
    Autor.prototype.getCountry = function () {
        return this.country;
    };
    Autor.prototype.setFirstName = function (name) {
        this.firstName = name;
    };
    Autor.prototype.setLastName = function (lastname) {
        this.lastName = lastname;
    };
    Autor.prototype.setCountry = function (country) {
        this.country = country;
    };
    return Autor;
}());
exports.Autor = Autor;
var Nota = /** @class */ (function () {
    function Nota(autor, title, text) {
        this.autor = autor;
        this.title = title || "";
        this.text = text || "";
    }
    Nota.prototype.getAutor = function () {
        return this.autor;
    };
    Nota.prototype.getTitle = function () {
        return this.title;
    };
    Nota.prototype.getText = function () {
        return this.text;
    };
    Nota.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Nota.prototype.setTitle = function (title) {
        this.title = title;
    };
    Nota.prototype.setText = function (text) {
        this.text = text;
    };
    return Nota;
}());
exports.Nota = Nota;
