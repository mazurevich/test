import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import hero from './hero/hero';
import movieList from './movieList/movieList';
import movieStat from './movieStat/movieStat';

let homeModule = angular.module('home', [
  uiRouter,
  hero ,
  movieList,
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
