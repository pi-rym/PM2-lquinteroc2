const { getAllMovies, createMovie } = require('../services/moviesService');

 async function obtenerPeliculas(req, res) { 
     try {
         const response = await getAllMovies();
         res.status(200).json(response);
     } catch (error) {
         res.status(500).send(error.message);
     }
 }

 async function crearPelicula(req, res) {
     const datosPelicula = req.body;

     try {
         const nuevaPelicula = await createMovie(datosPelicula);
         res.status(201).json({ message: 'Película creada exitosamente', movie: nuevaPelicula });
     } catch (error) {
         res.status(500).json({ error: error.message });
     }
 }

 module.exports = { 
     obtenerPeliculas,
     crearPelicula
 };
