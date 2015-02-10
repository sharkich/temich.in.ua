(function moduleIndexCtrl () {
  'use strict';

  angular.module('temichApp')
    .controller('IndexCtrl', ['$scope', '$rootScope', '$cookieStore',
      function IndexCtrl ($scope, $rootScope, $cookieStore) {

        $scope.data = {
          'x': 'xxx'
        };

        if ($rootScope && $cookieStore) {}

      }]);


})();
