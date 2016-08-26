class MovieDetailsController {
  constructor($stateParams, moviesService) {
    "ngInject";
    this.moviesSrv = moviesService;
    this.movie = moviesService.getMovieById($stateParams.id);
  }
}

export default MovieDetailsController;
