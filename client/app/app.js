import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-toastr/dist/angular-toastr.css';
import AngularAnimate from 'angular-animate';
import toastr from 'angular-toastr';
import localStorage from 'angular-local-storage';

angular.module('app', [
  uiRouter,
  Common,
  Components,
  AngularAnimate,
  toastr,
  localStorage
])
  .config(($locationProvider, toastrConfig, localStorageServiceProvider) => {
    "ngInject";

    angular.extend(toastrConfig, {
      autoDismiss: false,
      containerId: 'toast-container',
      maxOpened: 3,
      newestOnTop: true,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      target: 'body',
      closeButton: true,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      },
      timeOut: 800
    });

    localStorageServiceProvider
      .setPrefix('app')
      .setStorageType('localStorage')
      .setNotify(true, true)

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent)

  .run(function authHookRunBlock($transitions, AuthService) {
    "ngInject";

    // Matches if the destination state's data property has a truthy 'requiresAuth' property
    let requiresAuthCriteria = {
      to: (state) => {
        state.data && state.data.requiresAuth
      }
    };

    // Function that returns a redirect for the current transition to the login state
    // if the user is not currently authenticated (according to the AuthService)

    let redirectToLogin = (transition) => {
      let AuthService = transition.injector().get('AuthService');
      let $state = transition.router.stateService;
      if (!AuthService.isAuthenticated()) {
        return $state.target('login', undefined, {location: false});
      }
    };

    // Register the "requires auth" hook with the TransitionsService
    $transitions.onBefore(requiresAuthCriteria, redirectToLogin, {priority: 10});
  });

