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
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(AddButtonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
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
