// specs here
import MovieFactory from './movies.factory'

describe('Testing movies service', function () {

  let $rootScope, $state, $location, movies,
    $componentController, $compile, $http, $q, localStorageService;


  beforeEach(window.module('movies'));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    // $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
    $http = $injector.get('$http');
    $q = $injector.get('$q');

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
  }));


  it('having getMovies() method', function () {
    expect(movies).to.have.property('getMovies');
  });

  it('getting data from localStorage', ()=> {
    expect(movies.getMovies()[0].imdbID).to.be.equal('tt0096895');
  });

  it('addMovie() to add increase length of movies', ()=> {
    let initialLen = localStorageService.get().length;
    movies.addMovie({});
    expect(movies.getMovies().length).to.be.equal(initialLen + 1);
  });

  it('having removeMovie() method', function () {
    expect(movies).to.have.property('removeMovie');
  });

  it('removeMovie() to decrease length of movies', ()=> {
    let initialLen = localStorageService.get().length;
    let m = localStorageService.get()[0];
    movies.removeMovie(m);
    expect(movies.getMovies().length).to.be.equal(initialLen - 1);
  });

  it('having updateMovie() method', function () {
    expect(movies).to.have.property('updateMovie');
  });

  it('updateMovie() to update of movies', ()=> {
    let oldMovie = localStorageService.get()[0];
    let newMovie = Object.assign({}, oldMovie);
    newMovie.imdbID = "testId";
    movies.updateMovie(oldMovie, newMovie);
    expect(movies.getMovies()[0]).to.deep.equal(newMovie);
  });

});
