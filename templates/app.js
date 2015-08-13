

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
      // not recommended to pass this way in prod, good for dev though
      // Fine to serve on localhost because loading external templates won't
      // take terribly long, but on prod, it could slow down the site
    })
    .otherwise('/');
  })
  .controller('TestCtrl', TestCtrl);

// Preferred way for prod; injects the template in a cache during a run function
angular.module('app').run(function ($templateCache){
  $templateCache.put('test.html', 'Hello {{ test.user.name }}!');
});
