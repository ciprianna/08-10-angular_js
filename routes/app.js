var app = angular.module("myApp", ['ngRoute']); // Dependent on ngRoute

app.config(function($routeProvider){
  $routeProvider.when("/",
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
