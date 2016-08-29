import template from './addButton.html';
import controller from './addButton.controller';
import './addButton.scss';

let addButtonComponent = {
  bindings: {
    movie: '<',
  },
  template,
  controller
};

export default addButtonComponent;
