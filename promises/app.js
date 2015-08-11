function getData($timeout, $q){
  return function(){

    return $q(function(resolve, reject){
      $timeout(function(){
        resolve(Math.floor(Math.random() * 10)) // prints random int (0-9)
      }, 2000)
    })
    ////////////////////////////////////////////////////////////////////////////
    // // alternative method using $q to return the promise
    // return $q(function(resolve, reject){
    //   $timeout(function(){
    //     if(Math.round(Math.random())){
    //       resolve('Data received!')
    //     } else {
    //       reject('Oh noes!')
    //     }
    //   }, 2000)
    // })
    ////////////////////////////////////////////////////////////////////////////
    // var defer = $q.defer()
    //
    // // simulated asynch function
    // $timeout(function(){
    //   if(Math.round(Math.random())){ // Setting a random number as the condition
    //     defer.resolve('Data received!') // resolves if condition is met
    //   } else {
    //     defer.reject('Oh noes!') // else rejects the promise
    //   }
    // }, 2000)
    //
    // return defer.promise
  }
}

angular.module('app', [])
.factory('getData', getData)
.run(function(getData){
  var promise = getData()
    .then(function(num){
      console.log(num) // prints the original random number
      return num * 2 // doubles the random number
    })
    .then(function(num){
      console.log(num) // = random number * 2, this is what prints to the log
    })
    ////////////////////////////////////////////////////////////////////////////
    // .then(function(string){
    //   console.log(string)
    // }, function(error){ // Sends an error to the console log if promise rejects
    //   console.error(error)
    // })
    // .finally(function(){ // Runs regardless of promise outcome
    //   console.log('Finished at: ', new Date())
    // })
})
