import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Login from './login/login';
import MovieDetails from './movieDetails/movieDetails';
import MovieList from './movieList/movieList';


let componentModule = angular.module('app.components', [
  Home,
  About,
  Login,
  MovieDetails,
  MovieList
])

  .name;

export default componentModule;
