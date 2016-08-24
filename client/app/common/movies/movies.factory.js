import Movie from './movie';

const ITEMS_NUMBER = 20;
const UPDATE_INTERVAL = 1000;


let MoviesFactory = function ($interval) {
  const movies = [];

  const events = {
    //eventName: [subscribers];
  };

  const genres = ['horror','drama','sitcom','comedy','thriller'];

  const getRandomGenre = function(){
    const index = Math.floor(Math.random() * genres.length);
    return genres[index];
  };

  for (let i = 0; i < ITEMS_NUMBER; i++) {
    movies.push(new Movie(i, `name${i}`, `director${i}`, getRandomGenre(), 'lorem30)'));
  }

  let getMovies = () => {
    // console.log(`getting movies, ${(new Date).getTime()}`);
    return movies;
  };
  function on(eventName, callback) {
    if (!events[eventName] )
      events[eventName] = [];

    events[eventName].push(callback);
  }
  function trigger(eventName, ...args) {
    if (events[eventName] && events[eventName].length >0)
      for(event of events[eventName])
        if (typeof event === 'function')
          event(...args);
  }

  function updateMovie(oldMovie, newMovie) {
    let index = movies.indexOf(oldMovie);
    if (index>-1){
      movies[index] = newMovie;
      trigger('change', newMovie);
    }
  }

  function getMovieById(id) {
    return movies.find(movie => movie.id == id);
  }


  // const getRandomRank = function () {
  //   switch (Math.floor(Math.random() *3)) {
  //     case 0:
  //       return false;
  //     case 1:
  //       return true;
  //     case 2:
  //       return null;
  //   }
  // };
  // const setRandomRank = function () {
  //   movies.forEach((el)=> el.isLiked = getRandomRank())
  // };
  // $interval(setRandomRank, UPDATE_INTERVAL);

  return { getMovies, getMovieById, on, trigger, updateMovie };
};

MoviesFactory.$inject=['$interval'];

export default MoviesFactory;
