class AddButtonController {
  constructor(moviesService) {
    "ngInject";

    this.moviesService = moviesService;


  }

  addToCollection(){
    let vm = this;
    vm.moviesService.addMovie(this.movie);
  }

  movieIsInCollection(){
    let vm = this;
    return vm.moviesService.contains(this.movie);
  }

  removeFromCollection(){
    let vm = this;
    vm.moviesService.removeMovie(this.movie);
  }
}

export default AddButtonController;
