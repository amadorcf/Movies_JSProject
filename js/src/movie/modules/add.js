import Storage from "./storage.js";
import List from "./list.js";

export default class Add {
    constructor(){
        // Crear objetos
        this.storage = new Storage();
        this.list = new List(); 

        // Obtener elementos del DOM a utilizar
        this.title = document.querySelector("#title");
        this.desciption = document.querySelector("#desciption");
        this.save_btn = document.querySelector("#save");
    }

    movieSave(){
        this.save_btn.onclick = (e) =>{
            e.preventDefault();

            // Obtener datos actualizados
            let movies = this.storage.getData();
            let lastId = this.storage.getLastId();
            console.log(movies)


            //Datos a guardar
            let title = this.title.value;
            let desciption = this.desciption.value;

            //Validacion
            if(title != "" || desciption != ""){
                // Crear objeto
                let movie = {
                    id: lastId++,
                    title,
                    desciption,
                }

                // Guardar en el array de objetos
                movies.push(movie);

                // Guardar peliculas en el LocalStorage
                this.storage.save(movies);

                // Mostrar el listado de peliculas
                this.list.show(movies);


                console.log("Movie added: "+ title );
                
            }else{
                alert("Campos 'title' or 'description' vacios. \n\nRellene los campos para continuar.")
            }

            return false;
        };
    }
}