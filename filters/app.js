function TestCtrl() {
  // Basic controller where we preset the scope myString variable
  var self = this;
  self.myString = "Hello, world!";
}

// This is where the filter magic happens
function CapitalizeFilter() {
  // This is the function that Angular will execute when the expression is evaluated
  return function(text){
    // Text is the original string output of the Angular expression
    return text.toUpperCase();
    // Return the text in upper case
  }
}

angular.module('app', [])
.controller('TestCtrl', TestCtrl)
// Define a filter called 'capitalize' that will invoke the CapitalizeFilter function
.filter('capitalize', CapitalizeFilter);
