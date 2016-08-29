class MovieDetailsController {
  constructor($state, $stateParams, ...args) {
    "ngInject";
    console.log($state, $stateParams, this, args);
    // this.moviesSrv = moviesService;
    // this.movie = moviesService.getMovieById($stateParams.id);
  }
}

MovieDetailsController.$inject = ['$state', '$stateParams']

export default MovieDetailsController;
