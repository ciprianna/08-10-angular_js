angular.module('greetings', [])
.directive("welcome", function(){
  return {
    restrict: "E",
    controller: function($scope){
      $scope.words = [];

      this.sayHello = function(){
        $scope.words.push("Hello");
      }

      this.sayHowdy = function(){
        $scope.words.push("Howdy");
      }

      this.sayHi = function(){
        $scope.words.push("Hi");
      }
    },

    link: function(scope, element){
      element.bind("mouseenter", function(){
        console.log(scope.words)
      });
    }
  }
})

.directive("hello", function(){
  return {
    require: "welcome",
    link: function(scope, element, attrs, welcomeCtrl){
      welcomeCtrl.sayHello();
    }
  };
})

.directive("howdy", function(){
  return {
    require: "welcome",
    link: function(scope, element, attrs, welcomeCtrl){
      welcomeCtrl.sayHowdy();
    }
  };
})

.directive("hi", function(){
  return{
    require: "welcome",
    link: function(scope, element, attrs, welcomeCtrl){
      welcomeCtrl.sayHi();
    }
  };
});
