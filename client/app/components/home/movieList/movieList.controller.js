class MovieListController {
  constructor(movies) {
    this.movies = movies;
    //dsfa
  }

  switchLike(movie){
    movie.isLiked = movie.isLiked===true? null: true;
    this.movies.updateMovie(movie, movie);

  }
  switchDislike(movie){
    movie.isLiked = movie.isLiked===false? null: false;
    this.movies.updateMovie(movie, movie);
  }
}

MovieListController.$inject = ['Movies'];
export default MovieListController;
