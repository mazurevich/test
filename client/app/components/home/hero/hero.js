import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './hero.component';
import DifficultyButton from './difficultyButton/difficultyButton';

let heroModule = angular.module('hero', [
  uiRouter,
  DifficultyButton
])

.component('hero', heroComponent)
  
.name;

export default heroModule;
