var app = angular.module("app", []);

// Without using a controller, need to run the log in the rootScope
// This will log the event
app.run(function($rootScope, $log){
  $rootScope.$log = $log;
});
