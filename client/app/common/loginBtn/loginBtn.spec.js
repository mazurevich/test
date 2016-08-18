import LoginBtnModule from './loginBtn'
import LoginBtnController from './loginBtn.controller';
import LoginBtnComponent from './loginBtn.component';
import LoginBtnTemplate from './loginBtn.html';

describe('LoginBtn', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoginBtnModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LoginBtnController();
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
      expect(LoginBtnTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LoginBtnComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LoginBtnTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LoginBtnController);
      });
  });
});
