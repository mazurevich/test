import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addButtonComponent from './addButton.component';
import movieService from '../movies/movies';

let addButtonModule = angular.module('addButton', [
  uiRouter,
  movieService
])

.component('addButton', addButtonComponent)

.name;

export default addButtonModule;
