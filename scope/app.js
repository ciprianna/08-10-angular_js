var app = angular.module("drinkApp", [])

app.controller("AppCtrl", function($scope){
  $scope.ctrlFlavor = "Blackberry";
});

app.directive("drink", function(){
  return {
    scope: {
      flavor: '@' // Replaces the link function below (assigning attr from div
    },            // to the div content
    template: '<div>{{ flavor }}</div>',
    // link: function(scope, element, attrs){
    //   scope.flavor = attrs.flavor;
    // }
  };
});
