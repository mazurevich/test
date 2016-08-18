import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import LoginBtn from './loginBtn/loginBtn';


let commonModule = angular.module('app.common', [
  Navbar,
  User,
  LoginBtn
])
  
.name;

export default commonModule;
