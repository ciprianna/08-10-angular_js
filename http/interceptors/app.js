// Interceptors are factory() methods that return an object with 4 properties
// Properties are functions (request, requestError, response, responseError)
// Object is then registered in $httpProvider in a config block
function testInterceptor() {
  return {
    request: function(config) {
      return config;
    },

    requestError: function(config) {
      return config;
    },

    response: function(res) {
      return res;
    },

    responseError: function(res) {
      return res;
    }
  }
}

angular.module('app', [])
.factory('testInterceptor', testInterceptor)
.config(function($httpProvider) {
  $httpProvider.interceptors.push('testInterceptor');
})
.run(function($http) {
  $http.get('http://test-routes.herokuapp.com/test/hello')
    .then(function(res) {
      console.log(res.data.message)
    })
})
