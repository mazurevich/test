import MovieDetailsModule from './movieDetails'
import MovieDetailsController from './movieDetails.controller';
import MovieDetailsComponent from './movieDetails.component';
import MovieDetailsTemplate from './movieDetails.html';

describe('MovieDetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MovieDetailsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MovieDetailsController();
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
      expect(MovieDetailsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MovieDetailsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MovieDetailsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MovieDetailsController);
      });
  });
});
