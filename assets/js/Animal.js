"use strict";

export class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;

    constructor(Nombre, Edad, Img, Comentarios, Sonido){
        this.#nombre = Nombre;
        this.#edad = Edad;
        this.#img = Img;
        this.#comentarios = Comentarios;
        this.#sonido = Sonido;
    }

    get Nombre(){
        return this.#nombre;
    }

    get Edad(){
        return this.#edad;
    }

    get Img(){
        return this.#img;
    }

    get Comentarios(){
        return this.#comentarios;
    }

    set Comentarios(nuevosComentarios){
        this.#comentarios = nuevosComentarios;
    }

    get Sonido(){
        return this.#sonido;
    }


}



/////////////////////////////////////////

const animalElement = document.getElementById("#Animal");
const edadElement = document.getElementById("#edad");
const comentariosElement = document.getElementById("#comentarios");


