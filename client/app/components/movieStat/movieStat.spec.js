import MovieStatModule from './movieStat'
import MovieStatController from './movieStat.controller';
import MovieStatComponent from './movieStat.component';
import MovieStatTemplate from './movieStat.html';

describe('MovieStat', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MovieStatModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MovieStatController();
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
      expect(MovieStatTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MovieStatComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MovieStatTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MovieStatController);
      });
  });
});
