class MovieListController {

  constructor(moviesService, $scope, $state, $rootScope, toastr) {
    "ngInject";
    Object.assign(this,{toastr, moviesSrv: moviesService});
    this.movies = moviesService.getMovies();
  }

  switchLike(movie) {
    this.toastr.success('Hello world!', 'Toastr fun!');
    movie.isLiked = movie.isLiked === true ? null : true;
    this.moviesSrv.updateMovie(movie, movie);

  }

  switchDislike(movie) {
    movie.isLiked = movie.isLiked === false ? null : false;
    this.moviesSrv.updateMovie(movie, movie);
  }

}

export default MovieListController;
