angular.model('app', []);

angular.module('app').factory('messages', function(){
  var messages = {};

  messages.list = [];

  messages.add = function(message){
    messages.list.push({id: messages.list.length, text: message})
  };

  return messages;
});

angular.module('app').controller('ListCtrl', function(messages){
  var self = this;

  self.messages = messages.list;
});
