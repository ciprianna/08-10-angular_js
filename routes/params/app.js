var app = angular.module("myApp", ['ngRoute']); // Dependent on ngRoute

// Single page route configuration
app.config(function($routeProvider){
  $routeProvider.when("/:message",
    {
      templateUrl: "app.html",
      controller: "AppCtrl",
      controllerAs: "app"
    }
  );
});

app.controller("AppCtrl", function(){
  var self = this;
  self.message = "The app route is working!";
});
