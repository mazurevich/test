import AddButtonModule from './addButton'
import AddButtonController from './addButton.controller';
import AddButtonComponent from './addButton.component';
import AddButtonTemplate from './addButton.html';

describe('AddButton', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AddButtonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AddButtonController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller

    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}

  });

  describe('Component', () => {
      // component/directive specs
      let component = AddButtonComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AddButtonTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AddButtonController);
      });
  });
});
