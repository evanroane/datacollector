;(function(){
  'use strict';

  angular.module('batApp')
  .controller('CodeSetController', function($scope, codeSetFactory) {
    var vm = this;

    // $scope.inputs = [
    //   {
    //     id: "input1",
    //     name: "Mand",
    //     color: "btn-primary"
    //   }
    // ];

    $scope.codeSetData = {
      codeSetId: "The First Ever",
      description: "This code set has mands and elopment and other cool behavioral stuff",
      inputs: [
        {
          id: "input1",
          name: "Mand",
          color: "btn-primary"
        }
      ]
    };

    $scope.addNewInput = function() {
      var newInputNum = $scope.codeSetData.inputs.length+1;
      $scope.codeSetData.inputs.push(
        {
          "id": "input" + newInputNum,
          "name": "",
          "color": ""
        }
      );
    };

    vm.addNewCodeSet = function() {
      var inputs = $scope.codeSetData;
      codeSetFactory.createCodeSet(inputs, function(data) {
      });
    };
  })
  .controller('ShowCodeSetController', function($routeParams, codeSetFactory){
    var vm = this;
    var id = $routeParams.id;
    codeSetFactory.getCodeSet(id, function(data){
      vm.codeSet = data;
    });
  })

}());
