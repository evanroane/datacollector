;(function(){
  'use strict';

  angular.module('batApp')
  .controller('CodeSetController', function($scope, codeSetFactory) {
    var vm = this;

    $scope.inputs = [
      {
        id: "input1",
        name: "Mand",
        color: "btn-danger"
      }
    ];

    $scope.addNewInput = function() {
      var newInputNum = $scope.inputs.length+1;
      $scope.inputs.push(
        {
          "id": "input" + newInputNum,
          "name": "",
          "color": ""
        }
      );
    };

    vm.addNewCodeSet = function() {
      var inputs = $scope.inputs;
      codeSetFactory.createCodeSet(inputs, function(data) {
      });
    };

  });
}());
