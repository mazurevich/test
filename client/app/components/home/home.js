import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import hero from './hero/hero';
import loginBtn from '../../common/loginBtn/loginBtn'; 

let homeModule = angular.module('home', [
  uiRouter,
  hero ,
  loginBtn
])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        component: 'home'
      });
  })
  .component('home', homeComponent)
  .name;

export default homeModule;
