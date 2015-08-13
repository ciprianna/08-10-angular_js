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
  .when("/cookies/:cookieType",{
    redirectTo: function(routeParams, path, search){ // A method to redirect from a specific page
      console.log(routeParams); // Can print info to the console for debugging
      console.log(path);
      console.log(search);
      return "/" + routeParams.cookieType; // Uses a function that returns the redirect path
    }
  })
  .when('/sugar', {
      template: 'Sugar cookie'
    }
  )
  .otherwise({ // No route passed because it's a catchall for bad routes
    redirectTo: "/" // One redirect method is to use otherwise to catch all
  });
});

app.controller("AppCtrl", function(){
  var self = this;
  self.message = "The app route is working!";
});
