import angular from 'angular';
import uiRouter from 'angular-ui-router';
import difficultyButtonComponent from './difficultyButton.component';

let difficultyButtonModule = angular.module('difficultyButton', [
  uiRouter
])

.component('difficultyButton', difficultyButtonComponent)

.name;

export default difficultyButtonModule;
