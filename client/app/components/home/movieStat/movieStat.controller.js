class MovieStatController {
  constructor(moviesService, $scope) {
    "ngInject";

    let vm = this;
    Object.assign(this, { total: 0, liked: 0, disliked: 0, unspecified: 0 } );

    $scope.$watch('$ctrl.movies', function (data) {
      vm.calcStat();
    }, true);


    this.moviesSrv = moviesService;
    this.calcStat();
    this.movies = this.moviesSrv.getMovies();
  }

  calcStat() {
    let vm = this;
    let movies = this.moviesSrv.getMovies();

    if (movies && movies.length > 0) {
      vm.total = movies.length;
      vm.liked = movies.filter(e => e.isLiked === true).length;
      vm.disliked = movies.filter(e => e.isLiked === false).length;
      vm.unspecified = movies.filter(e => e.isLiked === null).length
    }
  }

  refresh() {
    this.movies = this.moviesSrv.getMovies();
  }
}

export default MovieStatController;
