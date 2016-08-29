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

}

export default SearchController;
