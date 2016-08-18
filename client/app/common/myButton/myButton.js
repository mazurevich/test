import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myButtonComponent from './myButton.component';

let myButtonModule = angular.module('myButton', [
  uiRouter
])

.component('myButton', myButtonComponent)

.name;

export default myButtonModule;
