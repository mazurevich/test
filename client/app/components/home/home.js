import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import hero from './hero/hero';
import movieStat from './movieStat/movieStat';
import search from './search/search';

import ngCookies from 'angular-cookies';

let homeModule = angular.module('home', [
  ngCookies,
  uiRouter,
  hero,
  movieStat,
  search
])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.rule(function ($injector, $location) {
      //what this function returns will be set as the $location.url
      var path = $location.path(), normalized = path.toLowerCase();
      if (path != normalized) {
        //instead of returning a new url string, I'll just change the $location.path directly so I don't have to worry about constructing a new url string and so a new state change is not triggered
        $location.replace().path(normalized);
      }
      // because we've returned nothing, no state change occurs
    });

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
