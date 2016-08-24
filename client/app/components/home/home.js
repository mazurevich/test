import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import hero from './hero/hero';
import movieStat from './movieStat/movieStat';
import ngCookies from 'angular-cookies';

let homeModule = angular.module('home', [
  ngCookies,
  uiRouter,
  hero ,
  movieStat
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
