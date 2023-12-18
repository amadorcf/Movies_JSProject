import Storage from "./storage.js"
import List from "./list.js"

export default function(){

    // Crear objetos
    const storage = new Storage();
    const list = new List();

    // Peliculas disponibles
    let movies_stored = storage.getData();
    let movies_viewed = document.querySelectorAll('#content .movie-item');

    // Recorrer peliculas motradas
    movies_viewed.forEach(movie =>{
        // Seleccionar boton a editar
        let edit_btn = movie.querySelector(".edit");
        let delete_btn = movie.querySelector(".delete");


        // Evento click a la pelicula a editar
        edit_btn.onclick =  function(){  
            let movie_title = movie.querySelector(".title").innerHTML;
            let movie_description = movie.querySelector(".description").innerHTML;

            // Obtener id de la pelicula
            const movie_id = parseInt(this.getAttribute('data-id'));

            // Ocultar botones
            edit_btn.remove();
            delete_btn.remove();

            // Añadir HTML debajo debajo de los botones
            
            let movie_edit_html = `
                <div class="edit_form">
                    <hr>
                    <h3 class="title">Edit movie</h3>
                    <form>
                        <input type="text" class="edited_title" value="${movie_title}">
                        <textarea class="edited_description">${movie_description}</textarea>
                        <input class="update" type="submit" value="Update"> 
                    </form>
                </div>
            `;

            movie.innerHTML += movie_edit_html;

            // Actualizar LocalStorage
            let update_btn = movie.querySelector(".update");
            update_btn.onclick =  function(e){  
                e.preventDefault(); //para que no se enviee el formulario

                let index = movies_stored.findIndex(movie => movie.id === movie_id);

                movies_stored[index] = {
                    id: movie_id,
                    title: movie.querySelector(".edited_title").value,
                    description: movie.querySelector(".edited_description").value,
                }

                storage.save(movies_stored);

                list.show(movies_stored);

                alert("Pelicula actualizada!");
                return false
            };

        }
    });


}