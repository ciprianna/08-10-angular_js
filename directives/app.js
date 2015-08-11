angular.module('greetings', [])
.directive("welcome", function(){ // First param is name, second is function
  return {
    restrict: "A", // Restricts to attributes
    link: function(){
      alert("Howdy!");
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // return {
  //   restrict: "E", // Restricts this directive to elements
  //   template: "<div>Howdy there! You look splendid.</div>" // Specifies the html
  // }
});
