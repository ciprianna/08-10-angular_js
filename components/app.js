var app = angular.module("app", [])

app.directive("clock", function(){ // Component - uncomplicated, passes an
  return {                         // attribute directly to an element
    restrict: "E",
    scope: {
      timezone: "@"
    },
    template: "<div>12:00pm {{ timezone }} </div>"
  };
});

app.directive("panel", function(){ // Container - inserts content into a
  return {                         // component; allows for multiple elements
    restrict: "E",                // named the same thing ('panel')
    transclude: true,
    scope: {
      title: '@'
    },
    template: "<div style='border 3px solid #000000'>" + "<div class='alert-box'>{{title}}</div>" + "<div ng-transclude></div></div>"
  };
});
