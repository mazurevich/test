import angular from 'angular';
import AuthService from './auth.service.factory';


let authModule = angular.module('authService', [])

  .factory('AuthService', AuthService)

  .name;

export default authModule;
