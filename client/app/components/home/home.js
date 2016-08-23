import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import hero from './hero/hero';
import movieList from './movieList/movieList';
import movieStat from './movieStat/movieStat';
import loginCheck from './loginCheck';
import ngCookies from 'angular-cookies';

let homeModule = angular.module('home', [
  ngCookies,
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
        component: 'home',
        resolve:{
          greeting: loginCheck
        }
      });
  })
  .component('home', homeComponent)
  .name;

export default homeModule;
