import MyButtonModule from './myButton'
import MyButtonController from './myButton.controller';
import MyButtonComponent from './myButton.component';
import MyButtonTemplate from './myButton.html';

describe('MyButton', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyButtonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyButtonController();
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
      expect(MyButtonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyButtonComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyButtonTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyButtonController);
      });
  });
});
