function testService($http) {
  // get function in the RESTful routes; returns API info from GET path
  this.get = function() {
    return $http.get('http://test-routes.herokuapp.com/test/hello')
      .then(function(res){
        // Return the data
        return res.data.message;
      })
  }
}


function TestCtrl(testService) {
  var self = this;

  self.getMessage = function() {
    testService.get()
      .then(function(res){
        self.message = message;
      })
  }
}

angular.module('app', [])
.service('testService', testService)
.controller('TestCtrl', TestCtrl)
