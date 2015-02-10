(function moduleVGBAppRun() {
  'use strict';
  /**
   * Created by temich on 1/30/15.
   */

  angular.module('VGBApp')
    .run(['$rootScope', '$location', '$cookieStore',
      function ($rootScope, $location, $cookieStore) {

        $rootScope.logoff = function () {
          if ($location && $cookieStore) {}
        };

        // Redirect to login if route requires auth and you're not logged in
        //$rootScope.$on('$routeChangeStart', function (event, next) {//, current
        //  //var token;
        //});

      }]);

})();
