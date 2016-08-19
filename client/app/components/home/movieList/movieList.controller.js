class MovieListController {
  constructor(movies) {
    this.movies = movies.getMovies();
  }

  like(movie){
    movie.isLiked = true;
  }
  dislike(movie){
    movie.isLiked = false;
  }
  upspecify(movie){
    movie.isLiked = null;
  }
}

MovieListController.$inject = ['Movies'];
export default MovieListController;
