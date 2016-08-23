class MovieStatController {
  constructor($log, moviesSrv, $scope) {
    this.moviesSrv = moviesSrv;
    this.log = $log.log;
    this.scope = $scope;
    this.calcStat();
  }

  $onInit(...args) {
    this.moviesSrv.on('change', ()=>this.calcStat());
  }

  calcStat() {
    this.log('calcStat', (new Date()).getTime());
    let movies = this.moviesSrv.getMovies();
    const ctrl = this;
    let res = {
      total: 0,
      liked: 0,
      disliked: 0,
      unspecified: 0
    };
    if (movies && movies.length > 0) {
      res.total = movies.length;
      res.liked = movies.filter(e => e.isLiked === true).length;
      res.disliked = movies.filter(e => e.isLiked === false).length;
      res.unspecified = movies.filter(e => e.isLiked === null).length
    }
    this.stat = res;
  }
}

MovieStatController.$inject = ['$log', 'Movies', '$scope'];

export default MovieStatController;
