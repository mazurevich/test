class SearchController {
  constructor(moviesService, $http, $q) {
    "ngInject";
    this.searchParam = '';
    Object.assign(this, {moviesService, $http, $q})
  }

  search() {

    let vm = this;
    let params = this.searchParam.split(',').map(p=> p.trim());
    this.moviesService.getMoviesInfo(params).then((results)=>
      vm.searchResults = results
    );

  }
  addToCollection(movie){
    let vm = this;
    vm.moviesService.addMovie(movie);
  }

  movieIsInCollection(movie){
    let vm = this;
    return vm.moviesService.contains(movie);
  }

  removeFromCollection(movie){
    let vm = this;
    vm.moviesService.removeMovie(movie);
  }
}

export default SearchController;
