;(function(window) {

angular.module('app', [])

// Define directives here

})(window);

angular.module('app', [])
.directive('tab', function(){
  return {
    restrict: "E",
    transclude: true,
    template: "<h2>Hello, world!</h2> <div role='tabPanel' ng-transclude></div>", // to be inserted into document at directive location
    require: '^tabset', // Instructs to look up the hierarchy to find the
                        // controller for tabset
    scope: { },
    link: function(scope, elem, attr, tabsetCtrl){ // can add in tabsetCtrl now
      tabsetCtrl.addTab(scope)
    }
  }
})

.directive('tabset', function(){
  return {
    restrict: "E",
    transclude: true,
    scope: { },
    templateUrl: 'tabset.html', // Specifies an external template
    bindToController: true, // Allows any values passed into directive's scope
                            // via scope property are automatically accessible
                            // in controller using 'this'
    controllerAs: 'tabset', // Sets the name to reference so it's not reliant on
                            // scope
    controller: function(){ // Creates the Angular controller to use
      var self = this
      self.tabs = []

      self.addTab = function addTab(tab){
        self.tabs.push(tab)
      }
    }
  }
})
