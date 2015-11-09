angular.module('timeApp').directive('showTime', function($interval) {
  return {
    restrict: 'E',
    template: '<div> The current time is <span ng-bind="time"></span> </div>',
    link: function(scope, elem, attr) {
      var currentTime = new Date();

      // scope.time = currentTime.toString();
      $interval(function() {
        scope.time = new Date().toString();

        // scope.time = Date.now();
        // scope.$apply();
        console.log(scope.time);
      }, 1000);
    },
  };
});
