var app = angular.module("app", []);

app.directive("dumbPassword", function(){
  // angular.element uses a jquery wrapper to create an element
  var validElement = angular.element('<div>{{model.input}}</div>');

  var link = function(scope){
    scope.$watch("model.input", function (value) {
      if(value === "password") {
        validElement.toggleClass("alert-box alert");
        // Can reference validElement, since it was created earlier
        // Better reference than looking for a specific child.
      }
    });
  }

  return {
    restrict: "E",
    replace: true,
    templateUrl: "dumbpass.html",
    compile: function(tElem) { // Compiles an html string to a template function
      tElem.append(validElement);

      return link;
    }
    // link: function(scope, element){
    //   // scope.$watch sets a listener on the model and waits for it to change;
    //   // after it changes, new value is checked in the function
    //   scope.$watch("model.input", function(value){
    //     if(value === "password"){
    //       element.children(1).toggleClass("alert-box alert");
    //     }
    //   });
    // }
  };
});
