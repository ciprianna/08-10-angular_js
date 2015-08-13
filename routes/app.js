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
  .when('/cookies', // Passes a route for the API and the template it matches
    {
      template: "NOM NOM NOM NOM"
    }
  )
  .otherwise({ // No route passed because it's a catchall for bad routes
    template: "This route isn't set!"
  });
});

app.controller("AppCtrl", function(){
  var self = this;
  self.message = "The app route is working!";
});

app.config
