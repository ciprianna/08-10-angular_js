function testService($http) {
  this.get = function() {}
}


function TestCtrl(testService) {
  var self = this;

  self.getMessage = function() {}
}

angular.module('app', [])
.service('testService', testService)
.controller('TestCtrl', TestCtrl)
