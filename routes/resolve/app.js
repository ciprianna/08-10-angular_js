var app = angular.module("myApp", ['ngRoute']); // Dependent on ngRoute

// Single page route configuration
app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "app.html",
      controller: "AppCtrl",
      controllerAs: "app",
      resolve: {
        app: function($q, $timeout){
          var defer = $q.defer;
          $timeout(function(){
            defer.resolve;
          }, 2000);
          return defer.promise;
        }
      }
    }
  )
});

app.controller("AppCtrl", function(){
  var self = this;
  self.message = "I'm a great app!";
});
