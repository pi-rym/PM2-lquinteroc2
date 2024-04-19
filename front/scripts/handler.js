const axios = require('axios')
const renderFilms = require('./renderFilms')

//* async Await
const getFilms = async () => {
    try {
       const { data } = await axios.get('http://localhost:3000/movies')
       console.log(data);
       data.forEach(renderFilms)
    } catch (error) {
        console.log(error.message)
    }
}



module.exports = getFilms;
    
  
