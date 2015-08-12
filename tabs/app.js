;(function(window) {

angular.module('app', [])

// Define directives here

})(window);

angular.module('app', [])
.directive('tab', function(){
  return {
    restrict: "E",
    transclude: true,
    template: "<div role='tabPanel' ng-show='active' ng-transclude></div>", // to be inserted into document at directive location
    require: '^tabset', // Instructs to look up the hierarchy to find the
                        // controller for tabset
    scope: {
      heading: '@' // Specifies a property that can be passed to the link
      // the @ sign is Angular-specific says property should be a String
    },
    link: function(scope, elem, attr, tabsetCtrl){ // can add in tabsetCtrl now
      scope.active = false // Sets all tabs to default of false; inactive
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

        if(self.tabs.length === 1){ // Sets the first tab to active
          tab.active = true
        }
      }
    }
  }
})
