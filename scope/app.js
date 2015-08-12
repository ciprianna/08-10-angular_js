var app = angular.module("drinkApp", [])

app.controller("AppCtrl", function($scope){
  $scope.ctrlFlavor = "Blackberry";
});

app.directive("drink", function(){
  return {
    scope: {
      flavor: '=' // Expects an Object to bind to
      // flavor: '@' // Replaces the link function below (assigning attr from div
      //             // to the div content; expects a String
    },
    template: '<input type="text" ng-model="flavor">',
    // link: function(scope, element, attrs){
    //   scope.flavor = attrs.flavor;
    // }
  };
});
