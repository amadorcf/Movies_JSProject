import Storage from "./storage.js"
import List from "./list.js"

export default function(){

    // Crear objetos
    const storage = new Storage();
    const list = new List();

    // Datos disponibles
    let movies_stored = storage.getData();
    let movies_viewed = document.querySelectorAll('#content .movie-item');

    // Recorrer peliculas motradas
    movies_viewed.forEach(movie =>{
        //let selector = "#"+ movie.id +" .delete";
        let delete_btn = movie.querySelector(".delete");

        delete_btn.onclick =  function(){  //tambien se puede hacer con addEventListener
            const movie_id = this.getAttribute('data-id');

            // Filtrar array para eliminar que se quiera
            const new_movies_stored = movies_stored.filter((movie) => movie.id !== parseInt(movie_id));

            // Actualizar datos en el LocalStorage
            storage.save(new_movies_stored);

            // Volver a mostrar listado actualizado
            list.show(new_movies_stored);
        }
    });


}