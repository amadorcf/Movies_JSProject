export default class List{

    constructor(){
        // Seleccionar elementos del DOM
        this.content = document.querySelector('#content')
    }


    movie_template(movie){
        let template = `
        <article class="movie-item" id="movie-${movie.id}">
            <h3 class="title">${movie.title}</h3>
            <p class="desciption">${movie.description}</p>

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
        movies.shift();

        // Recuperar las peliculas del LocalStorage
        movies.forEach(movie => {
            this.content.innerHTML += this.movie_template(movie);
        });
    }

}