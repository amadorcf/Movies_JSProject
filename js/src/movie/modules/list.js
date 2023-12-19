import deleteOfList from "./delete.js";
import edit from "./edit.js";

export default class List{

    constructor(){
        // Seleccionar elementos del DOM
        this.content = document.querySelector('#content')
    }


    movie_template(movie){

        const movie_title = movie.title;
        const movie_title_cap = movie_title.charAt(0).toUpperCase() + movie_title.slice(1);

        let template = `
        <article class="movie-item" id="movie-${movie.id}">
            <h3 class="title">${movie_title_cap}</h3>
            <p class="description">${movie.description}</p>

            <button class="edit" data-id="${movie.id}">Edit</button>
            <button class="delete" data-id="${movie.id}">Delete</button>
        </article>
        `;

        return template;
    }

    /* metodo eliminado ya que 
    addToList(movie, listMovies ){

        // Plantilla html de pelicula a agregar
        let movie_html = this.movie_template(movie);
     

        // Añadir pelicula al contenido del DOM
        this.content.innerHTML += movie_html;

        // Mostrar listado de peliculas
        this.show(listMovies);

    }
    */

    show(movies){
        // Vaciar DOM del contenedor principal
        this.content.innerHTML = "";

        // Quitar primer elemento de la lista
        movies.forEach(movie => {
            if(movie.id == 0){
                movies.shift();
            }
        });

        // Recuperar las peliculas del LocalStorage
        movies.forEach(movie => {
            this.content.innerHTML += this.movie_template(movie);
        });

        // Funcionalidad - Boton eliminar
        deleteOfList();

        // Funcionalidad - Boton editar
        edit();
    }


}