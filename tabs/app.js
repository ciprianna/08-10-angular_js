;(function(window) {

angular.module('app', [])

// Define directives here

})(window);

angular.module('app', [])
.directive('tab', function(){
  return {
    restrict: "E",
    transclude: true,
    template: "<h2>Hello, world!</h2> <div role='tabPanel' ng-transclude></div>",
    scope: { },
    link: function(scope, elem, attr){
      
    }
  }
})
