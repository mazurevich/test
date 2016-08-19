import angular from 'angular';
import uiRouter from 'angular-ui-router';
import movieStatComponent from './movieStat.component';
import movies from '../../common/movies/movies';

let movieStatModule = angular.module('movieStat', [
  uiRouter,
  movies
])

.component('movieStat', movieStatComponent)

.name;

export default movieStatModule;
