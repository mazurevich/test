import angular from 'angular';
import uiRouter from 'angular-ui-router';
import movieDetailsComponent from './movieDetails.component';
import movies from '../../common/movies/movies';
import commentList from './commentList/commentList';

let movieDetailsModule = angular.module('movieDetails', [
  uiRouter,
  movies,
  commentList
])

  .config(($stateProvider)=> {
    "ngInject";

    $stateProvider
      .state('movieDetails', {
        url: '/movie/:id',
        component: 'movieDetails',
        resolve: {
          delay: function ($timeout, $q) {
            "ngInject"
            let deferred = $q.defer();

            $timeout(()=> {
              console.log('resolved');
              deferred.resolve('123')
            }, 300);

            return deferred.promise;
          },
          movie: function ($stateParams, moviesService) {
            "ngInject"
            console.log($stateParams.id);
            return moviesService.getMovieFullInfo($stateParams.id);

          }
        }
      })
  })

  .component('movieDetails', movieDetailsComponent)

  .name;

export default movieDetailsModule;
