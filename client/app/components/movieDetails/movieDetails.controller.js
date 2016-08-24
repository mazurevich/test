class MovieDetailsController {
  constructor($stateParams, moviesSrv) {
    this.moviesSrv = moviesSrv;
    this.movie = moviesSrv.getMovieById($stateParams.id);
  }
}

MovieDetailsController.$inject = ['$stateParams','Movies']


export default MovieDetailsController;
