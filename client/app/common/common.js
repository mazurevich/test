import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import LoginBtn from './loginBtn/loginBtn';
import AuthService from './authService/auth.service';


let commonModule = angular.module('app.common', [
  Navbar,
  User,
  LoginBtn,
  AuthService
])

.name;

export default commonModule;
