angular.module('functionalities', [])
.directive("entering", function(){
  return function(scope, element){
    element.bind("mouseenter", function(){
      console.log("Mouse has entered the div.");
    })
  }
})
