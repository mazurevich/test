import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import MyButton from './myButton/myButton';


let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  MyButton
])
  
.name;

export default commonModule;
