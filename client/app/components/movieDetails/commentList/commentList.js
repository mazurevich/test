import angular from 'angular';
import uiRouter from 'angular-ui-router';
import commentListComponent from './commentList.component';
import comments from '../../../common/comments/comments';

let commentListModule = angular.module('commentList', [
  uiRouter,
  comments
])

  .config(($stateProvider)=> {
    "ngInject";

    $stateProvider
      .state('movieDetails.comments', {
        url: '/comments',
        component: 'commentList'
      })
  })

  .component('commentList', commentListComponent)

  .name;

export default commentListModule;
