(function(){

  function TestCtrl() {
    this.user = {name: 'Blake'};
  }

  angular.module('app', ['ngRoute']) // Requires ngRoute, loaded on index
  .config(function($routeProvider){
    $routeProvider.when('/', {
      controller: 'TestCtrl as test',
      template: 'Hello {{ test.user.name }}!'
    })
    .otherwise('/');
  })
  .controller('TestCtrl', TestCtrl);

})()
