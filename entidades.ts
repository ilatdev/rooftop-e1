// Entidades Autor y Nota

export class Autor {
  constructor(name?: string, lastname?: string, country?: string) {
    this.firstName = name;
    this.lastName = lastname;
    this.country = country || "unknown";
  }

  firstName: string;
  lastName: string;
  country: string;

  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getCountry() {
    return this.country;
  }

  setFirstName(name: string) {
    this.firstName = name;
  }
  setLastName(lastname: string) {
    this.lastName = lastname;
  }
  setCountry(country: string) {
    this.country = country;
  }
}

export class Nota {
  constructor(autor?: Autor, title?: string, text?: string) {
    this.autor = autor;
    this.title = title || "";
    this.text = text || "";
  }

  autor: Autor;
  title: string;
  text: string;

  getAutor() {
    return this.autor;
  }
  getTitle() {
    return this.title;
  }
  getText() {
    return this.text;
  }

  setAutor(autor: Autor) {
    this.autor = autor;
  }
  setTitle(title: string) {
    this.title = title;
  }
  setText(text: string) {
    this.text = text;
  }
}
