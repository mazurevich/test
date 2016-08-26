import angular from 'angular';
import MoviesFactory from './movies.factory';


let moviesModule = angular.module('movies', [])

.factory('moviesService', MoviesFactory)

.name;

export default moviesModule;
