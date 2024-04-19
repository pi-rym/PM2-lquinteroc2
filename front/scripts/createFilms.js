const axios = require('axios')
const renderFilms = require('./renderFilms')


const genres = ['Action', 'Fantasy', 'Comedy', 'Drama', 'Sci-fi', 'Terror', 'Adventure', 'Romance']

const btnSubmit = document.getElementById('btnSubmit')
const btnCleaner = document.getElementById('btnCleaner')
const options = document.getElementById('options')
const title = document.getElementById('title')
const year = document.getElementById('year')
const director = document.getElementById('director')
const duration = document.getElementById('duration')
const rate = document.getElementById('rate')
const poster = document.getElementById('poster')



function renderGenres() {
    options.innerHTML = ''

    for (const genre of genres) {
        const input = document.createElement('input')
        const label = document.createElement('label')

        input.type = "checkbox"
        input.id = genre
        input.name = "genre[]"
        input.value = genre

        label.htmlFor = genre
        label.textContent = genre

        options.appendChild(input)
        options.appendChild(label)

        
    }

    return options;
}

renderGenres()

function validateCheckboxes () {
   const checkboxes = document.querySelectorAll('input[name="genre[]"]')

//    console.log(checkboxes);

   for (const item of checkboxes) {
       if(item.checked) {
          item.classList.add("selected")
          return true;
       }
   }
}




function handlerSubmit(event) {
    event.preventDefault();

    // Validar que al menos un género esté seleccionado
    const genresSelected = validateCheckboxes();

    // Verificar que todos los campos estén completos
    if (![title.value, year.value, director.value, duration.value, rate.value, poster.value, genresSelected].every(Boolean)) {
        return alert('Faltan llenar campos');
    }

    // Construir el objeto de la película
    const nuevaPelicula = {
        title: title.value,
        year: year.value,
        director: director.value,
        duration: duration.value,
        rate: rate.value,
        poster: poster.value,
        genre: Array.from(document.querySelectorAll('input[name="genre[]"]:checked')).map(genre => genre.value)
    };

    // Realizar la solicitud POST utilizando Axios
    axios.post('http://localhost:3000/movies', nuevaPelicula)
        .then(response => {
            // Si la creación fue exitosa, mostrar un mensaje de éxito
            console.log('Película creada exitosamente:', response.data);
            alert('Película creada exitosamente');
            window.location.href = '/';
            renderFilms()

            // Limpiar los campos del formulario después de la creación exitosa
            // cleanInputs();
        })
        .catch(error => {
            // Si hubo algún error en el proceso de creación de la película, mostrar el mensaje de error
            console.error('Error al crear la película:', error);
        });
}

function cleanInputs () {
    title.value = ''
    year.value = ''
    director.value = ''
    duration.value = ''
    rate.value = ''
    poster.value = ''

    const checkboxes = document.querySelectorAll('input[name= "genre[]"]')

    for (const item of checkboxes) {
        item.checked = false;
        item.classList.remove('selected')
        
    }
}



btnSubmit.addEventListener('click', handlerSubmit)
btnCleaner.addEventListener('click', cleanInputs)


