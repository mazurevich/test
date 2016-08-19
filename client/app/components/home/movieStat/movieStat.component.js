import template from './movieStat.html';
import controller from './movieStat.controller';
import './movieStat.scss';

let movieStatComponent = {
  restrict: 'E',
  bindings: {
    movies: '<'
  },
  template,
  controller
};

export default movieStatComponent;
