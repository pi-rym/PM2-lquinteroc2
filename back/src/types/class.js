class Movies {
    constructor({title, year, director, duration, genre, rate, poster}) {
        if(!title || !year || !director) {
            throw new Error('Missing required fields');
        }
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
    
}


module.exports = {Movies};