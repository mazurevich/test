import angular from 'angular';
import CommentsFactory from './comments.factory';
import moviest from '../movies/movies';

let commentsModule = angular.module('comments', [moviest])

.factory('Comments', CommentsFactory)

.name;

export default commentsModule;
