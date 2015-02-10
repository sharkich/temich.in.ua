(function moduleIndexRouteJS () {
  'use strict';

  angular.module('temichApp')
    .config(['$routeProvider',
      function ($routeProvider) {
        $routeProvider.
          when('/', {templateUrl: 'app/index/index.html', controller: 'IndexCtrl'});
      }]);
})();
