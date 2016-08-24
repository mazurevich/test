import angular from 'angular';
import uiRouter from 'angular-ui-router';
import movieDetailsComponent from './movieDetails.component';
import movies from '../../common/movies/movies';
import commentList from './commentList/commentList';

let movieDetailsModule = angular.module('movieDetails', [
  uiRouter,
  movies,
  commentList
])

  .config(($stateProvider)=> {
    "ngInject";

    $stateProvider
      .state('movieDetails', {
        url: '/movie/:id',
        component: 'movieDetails'
      })
  })

  .component('movieDetails', movieDetailsComponent)

  .name;

export default movieDetailsModule;
