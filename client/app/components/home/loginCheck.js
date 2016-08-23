let loginCheck = function ($q, $timeout, $state, $http, $cookies) {
  var deferred = $q(function (resolve, reject) {

    // let user = $cookies.getObject('user');
    // if (user && user.name) {
    //   console.log('there is a user');
    //   resolve(user);
    // }
    // else {
    //   console.log('there is no user');
    //   $state.go('login');
    //   resolve('asdfa');
    // }
    resolve('asdf');
  });


  return deferred;
};

loginCheck.$inject = ['$q', '$timeout', '$state', '$http', '$cookies'];

export default loginCheck;
