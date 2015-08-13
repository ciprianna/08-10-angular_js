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
  .when("/cookies",{
    redirectTo: function(){ // A method to redirect from a specific page
      return "/"; // Uses a function that returns the redirect path
    }
  })
  .otherwise({ // No route passed because it's a catchall for bad routes
    redirectTo: "/" // One redirect method is to use otherwise to catch all
  });
});

app.controller("AppCtrl", function(){
  var self = this;
  self.message = "The app route is working!";
});
