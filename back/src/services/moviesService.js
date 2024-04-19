const {Movies} = require('../types/class')
const moviesValidation = require("../utils/validations/moviesValidation");
const Movie = require('../models/Movie')

 
async function createMovie(datosPelicula) {
    try {
       const nuevaPelicula = new Movie(datosPelicula);
       await nuevaPelicula.save();
       return nuevaPelicula;
   } catch (error) {
     throw new Error('Error al crear la película en la base de datos');
    }
}


 async function getAllMovies() {
    try {
        const movies = await Movie.find();
        const moviesCollection = movies.map((movie) => {
            if (moviesValidation(movie)) {
                return new Movies(movie);
            }
        });
        return moviesCollection.filter(movie => movie); // Filtra los elementos nulos del array
     } catch (error) {
         throw new Error(error.message);
     }
}





module.exports = {
     getAllMovies,
     createMovie
 };