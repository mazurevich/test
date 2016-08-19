import angular from 'angular';
import MoviesFactory from './movies.factory';


let moviesModule = angular.module('movies', [])

.factory('Movies', MoviesFactory)
  
.name;

export default moviesModule;
