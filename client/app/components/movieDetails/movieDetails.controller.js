class MovieDetailsController {
  constructor($stateParams, moviesSrv) {
    "ngInject";
    this.moviesSrv = moviesSrv;
    this.movie = moviesSrv.getMovieById($stateParams.id);
  }
}

export default MovieDetailsController;
