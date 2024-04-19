function moviesValidation(movieObject) {
    if(!movieObject.title || !movieObject.year || !movieObject.director) {
        throw new Error("Missing required fields")
    }
    return true;
}


module.exports = moviesValidation;