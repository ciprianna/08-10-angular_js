function getData($timeout, $q){
  return function(){
    var defer = $q.defer()

    // simulated asynch function
    $timeout(function(){
      if(Math.round(Math.random())){ // Setting a random number as the condition
        defer.resolve('Data received!') // resolves if condition is met
      } else {
        defer.reject('Oh noes!') // else rejects the promise
      }
    }, 2000)

    return defer.promise
  }
}

angular.module('app', [])
.factory('getData', getData)
.run(function(getData){
  var promise = getData()
    .then(function(string){
      console.log(string)
    }, function(error){ // Sends an error to the console log if promise rejects
      console.error(error)
    })
})
