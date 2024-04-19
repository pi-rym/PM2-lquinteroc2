const { Router } = require('express')
const moviesRouter = require('./moviesRoute')


const router = Router()

router.use('/movies', moviesRouter)


module.exports= router