class MovieStatController {
  constructor(Movies) {
    "ngInject";
    this.moviesSrv = Movies;
    this.calcStat();
  }

  calcStat() {
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
    this.stats = res;
  }
}

export default MovieStatController;
