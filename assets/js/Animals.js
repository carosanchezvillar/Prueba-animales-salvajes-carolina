"use strict"

import { Animal } from "./animal.js";

export class Leon extends Animal{
    Rugir(){
        const player = document.getElementById("player");
        player.setAttribute("src", `/assets/sounds/${this.Sonido}`);
        player.load();
        player.play();
    }  
}

export class Lobo extends Animal{
    Aullar(){
        const player = document.getElementById("player");
        player.setAttribute("src", `/assets/sounds/${this.Sonido}`);
        player.load();
        player.play();
        
    }
  
}

export class Oso extends Animal{
    Gruñir(){
        const player = document.getElementById("player");
        player.setAttribute("src", `/assets/sounds/${this.Sonido}`);
        player.load();
        player.play();
    } 
}

export class Serpiente extends Animal{
    Sisear(){
        const player = document.getElementById("player");
        player.setAttribute("src", `/assets/sounds/${this.Sonido}`);
        player.load();
        player.play();
    }  
}

export class Aguila extends Animal{
    Chillar(){
        const player = document.getElementById("player");
        player.setAttribute("src", `/assets/sounds/${this.Sonido}`);
        player.load();
        player.play();
    }  
}

