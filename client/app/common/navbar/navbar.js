import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';
import loginBtn from '../loginBtn/loginBtn'

let navbarModule = angular.module('navbar', [
  uiRouter,
  loginBtn
])

.component('navbar', navbarComponent)
  
.name;

export default navbarModule;
