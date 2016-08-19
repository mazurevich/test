class Movie{
  constructor(name, director, genre, description){
    Object.assign(this, {name, director, genre, description});
    this.isLiked = null;
  }
}

export default Movie;
