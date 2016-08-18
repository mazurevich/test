import difficultyButtonModule from './difficultyButton'
import difficultyButtonController from './difficultyButton.controller';
import difficultyButtonComponent from './difficultyButton.component';
import difficultyButtonTemplate from './difficultyButton.html';

describe('difficultyButton', () => {
  let $rootScope, makeController;

  beforeEach(window.module(difficultyButtonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new difficultyButtonController();
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
      expect(difficultyButtonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = difficultyButtonComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(difficultyButtonTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(difficultyButtonController);
      });
  });
});
