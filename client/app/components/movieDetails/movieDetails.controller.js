class MovieDetailsController {
  constructor($stateParams, Movies) {
    "ngInject";
    this.moviesSrv = Movies;
    this.movie = Movies.getMovieById($stateParams.id);
  }
}

export default MovieDetailsController;
