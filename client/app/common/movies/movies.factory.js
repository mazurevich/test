let MoviesFactory = function ($http, $q, localStorageService) {
  // console.log(`http: ${$http} , q: ${$q}, localStorage: ${localStorageService}`);
  "ngInject";
  let movies = [];

  const events = {};

  movies = extractFromLS();

  return {
    addMovie,
    removeMovie,
    updateMovie,
    contains,
    getMovies,
    getMovieById,
    getMoviesInfo,
    getMovieFullInfo
  };

  function getMovies() {
    return movies;
  }

  function _saveToLs() {
    localStorageService.set('movies', movies);
  }

  function addMovie(movie) {
    if (!movies.some(m=> m.imdbID == movie.imdbID)) {
      movies.push(Object.assign({isLiked: null}, movie));
      _saveToLs();
    }
  }

  function removeMovie(movie) {
    let item = movies.find(m=> m.imdbID == movie.imdbID);
    if (item) {
      movies.splice(movies.indexOf(item), 1);
    }
    _saveToLs();
  }

  function contains(movie) {
    return movies.some(m=> m.imdbID == movie.imdbID);
  }

  function updateMovie(oldMovie, newMovieProps) {
    let index = movies.indexOf(oldMovie);
    if (index > -1) {
      movies[index] = Object.assign({}, oldMovie, newMovieProps);
      _saveToLs();
    }
  }

  function getMovieById(id) {
    return movies.find(movie => movie.imdbID == id);
  }

  function extractFromLS() {
    let result = localStorageService.get('movies');
    return result || [];
  }

  function getMoviesInfo(...names) {
    let promises = names.map(name =>
      $http.get(`http://www.omdbapi.com/?s=${name}&y=&plot=short&r=json`)
        .then(excract)
    );

    return $q.all(promises).then(unite);


    function excract(result) {
      if (result.status === 200 && result.data.Response == "True")
        return result.data.Search;
    }

    function unite(results) {
      return results.reduce((prev, current) => {
        return prev.concat(current)
      });
    }

  }

  function getMovieFullInfo(imdbID) {
    return $http.get(`http://www.omdbapi.com/?i=${imdbID}&plot=full&r=json`)
      .then(extract)
      .then(addInfo);

    function extract(response) {
      return response.data
    }

    function addInfo(movie) {
      return Object.assign(movie, getMovieById(movie.imdbID));
    }

  }

};

export default MoviesFactory;
