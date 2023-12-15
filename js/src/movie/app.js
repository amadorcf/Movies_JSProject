// APLICACION QUE CARGA LOS DIFERENTES MODULOS
import Add from './modules/add.js';

export default class App{

    constructor(){
        // Inicializar propiedades
        this.add = new Add();
    }

    load(){
        //añadir pelicula
        this.add.movieSave();
        //listar peliculas
        
        //buscar peliculas

        console.log("Welcome to YourMovie");
    }
}