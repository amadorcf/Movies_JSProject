// APLICACION QUE CARGA LOS DIFERENTES MODULOS
import Add from './modules/add.js';
import List from './modules/list.js';
import Storage from './modules/storage.js';

export default class App{

    constructor(){
        // Inicializar propiedades
        this.add = new Add();
        this.storage = new Storage();
        this.list = new List();
    }

    load(){

        // Añadir pelicula
        this.add.movieSave();


        // Listar peliculas
        const movies = this.storage.getData();
        this.list.show(movies);

        // Buscar peliculas

        console.log("Welcome to YourMovie");
    }
}