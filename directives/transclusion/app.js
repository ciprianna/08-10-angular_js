angular.module('greetings', [])
.directive("welcome", function() {
  return {
    restrict: "E",
    scope: {},
    transclude: true, // Should only be used on elements to preserve what's
                      // between the elements
    template: "<div>This is the welcome component</div><ng-transclude></ng-transclude>" // Button element will
        // be replaced entirely with this content without the transclude tags
  }
});
