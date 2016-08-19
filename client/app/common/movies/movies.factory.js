import Movie from './movie';

const ITEMS_NUMBER = 500;
const UPDATE_INTERVAL = 1000;


let MoviesFactory = function ($interval) {
  const movies = [];

  const genres = ['horror','drama','sitcom','comedy','thriller'];

  const getRandomGenre = function(){
    const index = Math.floor(Math.random() * genres.length);
    return genres[index];
  };

  for (let i = 0; i < ITEMS_NUMBER; i++) {
    movies.push(new Movie(`name${i}`, `director${i}`, getRandomGenre(), 'lorem30)'));
  }

  let getMovies = () => {
    return movies;
  };

  const getRandomRank = function () {
    // asdf
    switch (Math.floor(Math.random() *3)) {
      case 0:
        return false;
      case 1:
        return true;
      case 2:
        return null;
    }
  };

  const setRandomRank = function () {
    movies.forEach((el)=> el.isLiked = getRandomRank())
  };

  // $interval(setRandomRank, UPDATE_INTERVAL);

  return { getMovies };
};

MoviesFactory.$inject=['$interval'];

export default MoviesFactory;
