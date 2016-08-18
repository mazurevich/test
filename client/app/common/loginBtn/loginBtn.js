import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginBtnComponent from './loginBtn.component';
import user from '../user/user';

let loginBtnModule = angular.module('loginBtn', [
  uiRouter,
  user
])

.component('loginBtn', loginBtnComponent)

.name;

export default loginBtnModule;
