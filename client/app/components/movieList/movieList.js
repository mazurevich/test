import angular from 'angular';
import uiRouter from 'angular-ui-router';
import movieListComponent from './movieList.component';
import common from '../../common/common';


let movieListModule = angular.module('movieList', [
  uiRouter,
  common
])
  .config(($stateProvider, $locationProvider) => {
    "ngInject";

    $stateProvider.state('movies', {
      url: '/movies',
      component: 'movieList',
      data: {
        requiresAuth: true
      }
    })
  })

  .component('movieList', movieListComponent)
  .name;

export default movieListModule;
