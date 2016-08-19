import angular from 'angular';
import uiRouter from 'angular-ui-router';
import movieListComponent from './movieList.component';
import movies from '../../../common/movies/movies';

let movieListModule = angular.module('movieList', [
  uiRouter,
  movies
])

.component('movieList', movieListComponent)

.name;

export default movieListModule;
