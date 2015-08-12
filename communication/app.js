var app = angular.module("app", []);

app.directive("country", function(){
  return {
    restrict: "E",
    controller: function(){
      this.makeAnnouncement = function(message){
        console.log("Country says: " + message);
      };
    }
  };
});

app.directive("state", function(){
  return {
    restrict: "E"
  };
});

app.directive("city", function(){
  return {
    restrict: "E",
    require: "^country", // Look to parents for country directive
    link: function(scope, element, attrs, countryCtrl){
      countryCtrl.makeAnnouncement("This city rocks"); // Found country, so can
    }                                           // use makeAnnouncement method
  };
});
