class AppController {
  constructor($rootScope, $state, User) {
    "ngInject";

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      console.log('$stateChangeStart');
      event.preventDefault();

      if (!User.isSignedIn && toState)
        $state.go('login');

    });

    this.previewText = 'Hello from AppController';

  }

  $onDestroy(){
    console.log('on destroy app');
  }
}

export default AppController;

