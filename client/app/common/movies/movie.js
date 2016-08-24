class Movie {
  constructor(id, name, director, genre, description) {
    Object.assign(this, {name, director, genre, description});
    this.id = id;
    this.isLiked = null;
  }
}

export default Movie;
