function TestCtrl() {
  var self = this;

  // initialize an array
  // buttons in html add/rm items in this array
  self.people = [
    { name: "Eric Simons" },
    { name: "Albert Pai" },
    { name: "Matthew Greenster" }
  ];

  // self.showBoxOne = false;
  // self.showBoxTwo = false;


}

angular.module('app', ['ngAnimate']) // requires angular-animate
.controller('TestCtrl', TestCtrl)
