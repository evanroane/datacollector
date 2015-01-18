;(function(){
  'use strict';

  angular.module('batApp')
  .controller('AnalyzeDataController', function($scope, $routeParams, sessionDataFactory) {
    var vm = this;
    var id = $routeParams.id;


    sessionDataFactory.getSessionData(id, function(data){
      vm.sessionData = data;

      $scope.startDate = moment(vm.sessionData.startDate)
        .format("dddd, MMMM Do YYYY, h:mm:ss a");
      $scope.endDate = moment(vm.sessionData.endDate)
        .format("dddd, MMMM Do YYYY, h:mm:ss a");
      $scope.instances = vm.sessionData.behaviorInstances;
      $scope.summary = vm.sessionData.summary;

      console.log($scope.instances);
      console.log($scope.summary);
    });

    vm.csvMaker = function() {
      var s = vm.sessionData.summary;
      var d = vm.sessionData.behaviorInstances;
      // This variable is where all the data extracted from the object array is stored
      var CSV = "";
      CSV += "Session Summary" + "\r\n\n";
      CSV += "Name:," + vm.sessionData.name + ",\r\n";
      CSV += "Description:," + vm.sessionData.description + ",\r\n";
      CSV += "Code Set:," + vm.sessionData.codeSetName + ",\r\n";
      CSV += "Started:," + $scope.startDate + ",\r\n";
      CSV += "Ended:," + $scope.endDate + ",\r\n\n";
      CSV += "Summary Data:" + ",\r\n";
      CSV += "Frequency,Behavior,RPM,\r\n"

      //1st loop extracts each row, 2nd loop extracts the contents
      for (var i = 0; i < s.length; i++) {
        var row = "";
        for (var index in s[i]) {
          row += '"' + s[i][index] + '",';
        }
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
      }
      CSV += "\r\n" + "Raw Data:" + "\r\n";
      CSV += "Behavior, Seconds, Index,\r\n";
      for (var i = 0; i < d.length; i++) {
        var row = "";
        for (var index in d[i]) {
          row += '"' + d[i][index] + '",';
        }
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
      }

      var fileName = "Report_";
      fileName += vm.sessionData.name.replace(/ /g,"_");
      var uri = "data:text/csv;charset=utf-8," + encodeURI(CSV);

      var link = document.createElement("a");
      link.href = uri;
      link.style = "visibility:hidden";
      link.download = fileName + ".csv";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  })
}());
