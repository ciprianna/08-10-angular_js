function getData($timeout, $q){
  return function(){
    var defer = $q.defer()

    // simulated asynch function
    $timeout(function(){

    }, 2000)

    return defer.promise
  }
}

angular.module('app', [])
.factory('getData', getData)
.run(function(getData){
  var promise = getData()
})
