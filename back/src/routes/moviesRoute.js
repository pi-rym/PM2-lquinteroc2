const { Router } = require('express')
const moviesController = require('../controllers/moviesController')

const moviesRouter = Router()



moviesRouter.get('/', moviesController.obtenerPeliculas);
moviesRouter.post('/', moviesController.crearPelicula);


module.exports = moviesRouter
