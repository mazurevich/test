class MovieListController {
  constructor(moviesSrv) {
    this.moviesSrv = moviesSrv;
    this.movies = moviesSrv.getMovies();
    //dsfa
  }

  switchLike(movie){
    movie.isLiked = movie.isLiked===true? null: true;
    this.moviesSrv.updateMovie(movie, movie);

  }
  switchDislike(movie){
    movie.isLiked = movie.isLiked===false? null: false;
    this.moviesSrv.updateMovie(movie, movie);
  }
}

MovieListController.$inject = ['Movies'];
export default MovieListController;
