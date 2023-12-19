import Storage from "./storage.js"
import List from "./list.js"

export default function(){

        // Crear objetos
        const storage = new Storage();
        const list = new List();
    
        // Peliculas disponibles
        let movies_stored = storage.getData();
        let movies_viewed = document.querySelectorAll('#content .movie-item');

        // Elementos del DOM
        let content = document.querySelector('#content');
        let search_btn = document.querySelector('#search');

        // Funcion boton SEARCH
        search_btn.onclick = (e) => {
            e.preventDefault();

            // Texto que buscar
            let search_value = document.querySelector("#search_field").value;
           
            // Peliculas disponibles
            let movies_stored = storage.getData();

            // Filtrar peliculas con texto buscado
            const searched_movie = movies_stored.filter(movie => {
                console.log(movie.title.toLowerCase().includes(search_value.toLowerCase()));
                return movie.title.toLowerCase().includes(search_value.toLowerCase());
            });

            console.log(searched_movie)

            // Mostrar la pelicula
            if(searched_movie.length <= 0){
                content.innerHTML = `<div><h2>No hay peliculas con ese titulo</h2></div>`;
            }else{
                list.show(searched_movie);
            }

            return false;
        }; 


}
