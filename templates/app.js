(function(){

  function TestCtrl($templateCache) {
    this.user = {name: 'Blake'};
    console.log($templateCache.get('test.html')); // Prints the raw template to
    // the console.
  }

  angular.module('app', ['ngRoute']) // Requires ngRoute, loaded on index
  .config(function($routeProvider){
    $routeProvider.when('/', {
      controller: 'TestCtrl as test',
      templateUrl: 'test.html'
      // template: 'Hello {{ test.user.name }}!' // Directly passes the String;
      // not recommended to pass this way
    })
    .otherwise('/');
  })
  .controller('TestCtrl', TestCtrl);

})()
