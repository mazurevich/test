import template from './movieDetails.html';
import controller from './movieDetails.controller';
import './movieDetails.scss';

let movieDetailsComponent = {
  bindings: {
    delay: '<',
    movie: '<'
  },
  template,
  controller
};

export default movieDetailsComponent;
