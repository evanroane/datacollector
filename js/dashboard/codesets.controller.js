;(function(){
  'use strict';

  angular.module('batApp')
  .controller('CodeSetController', function($scope, codeSetFactory) {
    var vm = this;

    $scope.inputs = [
      {
        id: "input1",
        name: "Mand",
        color: "yellow"

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

    $scope.showInputLabel = function (input) {
      return input.id === $scope.inputs[0].id;
    }

  });
}());
