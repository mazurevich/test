import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchComponent from './search.component';
import common from '../../../common/common'

let searchModule = angular.module('search', [
  uiRouter,
  common
])

.component('search', searchComponent)

.name;

export default searchModule;
