function FunCtrl(){
  var self = this;

  self.start = function(){
    console.log("Fun times have been started!");
  }

  self.end = function(){
    console.log("Fun time is over");
  }
}

angular.module('coolApp', [])
.controller('FunCtrl', FunCtrl)
.directive("entering", function(){
  return function(scope, element, attrs){
    element.bind("mouseenter", function(){
      scope.$apply(attrs.entering); // $apply can parse and locate the method
        // from the scope, rather than passing it directly and assuming the
        // scope is known
    })
  }
});
