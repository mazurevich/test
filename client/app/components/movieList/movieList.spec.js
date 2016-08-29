import MovieListModule from './movieList'
import MovieListController from './movieList.controller';
import MovieListComponent from './movieList.component';
import MovieListTemplate from './movieList.html';

describe('MovieList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MovieListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MovieListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs

  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}

  });

  describe('Component', () => {
      // component/directive specs
      let component = MovieListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MovieListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MovieListController);
      });
  });
});
