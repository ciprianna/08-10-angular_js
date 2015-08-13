var app = angular.module("myApp", ['ngRoute']); // Dependent on ngRoute

// Single page route configuration
app.config(function($routeProvider){
  $routeProvider.when("/:firstName/:middleName/:lastName",
    {
      templateUrl: "app.html",
      controller: "AppCtrl",
      controllerAs: "app"
    }
  );
});

app.controller("AppCtrl", function($routeParams){
  var self = this;
  self.message = $routeParams.firstName + " " + $routeParams.middleName + " " + $routeParams.lastName;
});
