var app = angular.module("myApp", ['ngRoute']); // Dependent on ngRoute

// Single page route configuration
app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "app.html",
      controller: "AppCtrl",
      controllerAs: "app"
    }
  )
  .otherwise({ // No route passed because it's a catchall for bad routes
    redirectTo: "/"
  });
});

app.controller("AppCtrl", function(){
  var self = this;
  self.message = "The app route is working!";
});
