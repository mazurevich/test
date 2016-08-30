// specs here
import MovieFactory from './movies.factory';
import Movies from './movies';

describe('Testing movies service', function () {

  let  movies,$http, $q, localStorageService;

  beforeEach(angular.mock.module(Movies));

  beforeEach(inject((_$http_, _$q_) => {
    $http = _$http_;
    $q = _$q_;
    localStorageService = {
      set(a, b){

      },
      get(a){
        return [
          {
            "isLiked": null,
            "Title": "Batman",
            "Year": "1989",
            "imdbID": "tt0096895",
            "Type": "movie",
            "Poster": "asdfasdf"
          }
        ]
      }
    };

    movies = MovieFactory($http, $q, localStorageService);
    spyOn(localStorageService, 'set');
  }));


  describe('testing interface', function () {
    it('# addMovie() ', function () {
      expect(movies.removeMovie).toBeDefined();
    });
    it('# removeMovie() ', function () {
      expect(movies.removeMovie).toBeDefined();
    });
    it('# updateMovie() ', function () {
      expect(movies.removeMovie).toBeDefined();
    });
    it('# contains() ', function () {
      expect(movies.removeMovie).toBeDefined();
    });
    it('# getMovies() ', function () {
      expect(movies.removeMovie).toBeDefined();
    });
    it('# getMovieById() ', function () {
      expect(movies.removeMovie).toBeDefined();
    });
    it('# getMovieById() ', function () {
      expect(movies.removeMovie).toBeDefined();
    });
    it('# getMovieFullInfo() ', function () {
      expect(movies.removeMovie).toBeDefined();
    });
    it('total amount of methods', function () {
      expect(Object.keys(movies).length).toEqual(8);
    })
  });


  describe('simple interactions', function () {

    it('getting data from localStorage', ()=> {
      expect(movies.getMovies()[0].imdbID).toEqual('tt0096895');
    });

    it('addMovie() increase length of movies', ()=> {
      let initialLen = localStorageService.get().length;
      movies.addMovie({});

      expect(movies.getMovies().length).toEqual(initialLen + 1);
      expect(localStorageService.set).toHaveBeenCalled();
    });

    it('removeMovie() to decrease length of movies', ()=> {
      let initialLen = localStorageService.get().length;
      let m = localStorageService.get()[0];

      movies.removeMovie(m);

      expect(movies.getMovies().length).toEqual(initialLen - 1);
      expect(localStorageService.set).toHaveBeenCalled();
    });

    it('updateMovie() to update of movies', ()=> {
      let oldMovie = movies.getMovieById('tt0096895');
      movies.updateMovie(oldMovie, {Type: 'newType'});

      expect(movies.getMovieById('tt0096895').Type).toEqual('newType');
      expect(localStorageService.set).toHaveBeenCalled();
    });
  });

  describe('http requests', () => {

    beforeEach(()=>{
      let defered = $q.defer();
      defered.resolve('asdf');

      spyOn($http, 'get').and.returnValue(defered.promise);
    });

    it('getMoviesInfo return a promise', () => {
      // debugger;
      let result = movies.getMoviesInfo('thor');
      expect(result.then).toBeDefined();
      expect($http.set).toHaveBeenCalled();
    })

  })

});

