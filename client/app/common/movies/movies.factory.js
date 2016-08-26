import Movie from './movie';

const ITEMS_NUMBER = 20;
const UPDATE_INTERVAL = 1000;


let MoviesFactory = function ($interval, $http, $q, localStorageService) {
  "ngInject";
  let movies = [];

  const events = {
    //eventName: [subscribers];
  };

  movies = extractFromLS();

  return {
    addMovie,
    removeMovie,
    updateMovie,
    contains,
    getMovies,
    getMovieById,
    on,
    trigger,
    getMoviesInfo
  };


  function getMovies() {
    return movies;
  }

  function addMovie(movie) {
    if (!movies.some(m=> m.imdbID == movie.imdbID)) {
      movies.push(Object.assign({isLiked: null}, movie));
      trigger('change', movie);
      saveToLs();
    }
  }

  function saveToLs() {
    localStorageService.set('movies', movies);
  }

  function removeMovie(movie) {
    let item = movies.find(m=> m.imdbID == movie.imdbID);
    if (item) {
      movies.splice(movies.indexOf(item),1);
    }
  }

  function contains(movie) {
    return  movies.some(m=> m.imdbID == movie.imdbID);
  }

  function on(eventName, callback) {
    if (!events[eventName])
      events[eventName] = [];

    events[eventName].push(callback);
  }

  function trigger(eventName, ...args) {
    if (events[eventName] && events[eventName].length > 0)
      for (event of events[eventName])
        if (typeof event === 'function')
          event(...args);
  }

  function updateMovie(oldMovie, newMovie) {
    let index = movies.indexOf(oldMovie);
    if (index > -1) {
      movies[index] = newMovie;
      trigger('change', newMovie);
      saveToLs();
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

};

export default MoviesFactory;
