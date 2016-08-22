class HomeController {

  constructor($scope) {
    $scope.$on('message', (e, opt)=> {
      console.log(e, opt);
    });
  }


}

HomeController.$inject = ['$scope']
export default HomeController;
