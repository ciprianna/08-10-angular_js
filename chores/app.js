var app = angular.module("choreApp", []);

app.directive("kid", function(){
  return {
    restrict: "E",
    template: "<input type='text' ng-model='chore'>{{chore}}"
  };
});
