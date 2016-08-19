class MovieStatController {
  constructor(movies) {
    this.movies = movies.getMovies();
  }

  getStat() {
    const ctrl = this;
    let res = {
      total: 0,
      liked: 0,
      disliked: 0,
      unspecified: 0
    };
    if (this.movies && this.movies.length > 0) {
      res.total = ctrl.movies.length;
      res.liked = ctrl.movies.filter(e => e.isLiked === true).length;
      res.disliked = ctrl.movies.filter(e => e.isLiked === false).length;
      res.unspecified = ctrl.movies.filter(e => e.isLiked === null).length
    }
    this.stat = res;
    return res;
  }
}

MovieStatController.$inject = ['Movies'];

export default MovieStatController;
