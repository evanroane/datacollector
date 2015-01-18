var sessionData = {
  "behaviorInstances":[
    {"name":"aggression","time":3,"x":0},
    {"name":"i_mand","time":4,"x":1},
    {"name":"prompt","time":5,"x":2},
    {"name":"aggression","time":7,"x":3},
    {"name":"i_mand","time":7,"x":4},
    {"name":"p_mand","time":9,"x":5},
    {"name":"p_mand","time":9,"x":6},
    {"name":"p_mand","time":9,"x":7},
    {"name":"p_mand","time":9,"x":8},
    {"name":"p_mand","time":9,"x":9},
    {"name":"p_mand","time":10,"x":10},
    {"name":"p_mand","time":10,"x":11}
  ],
"codeSetName":"FCT",
"description":"a",
"endDate":1421015323220,
"name":"with round",
"startDate":1421015311690,
"summary":[
    {"frequency":2,"name":"aggression","rpm":0.01},
    {"frequency":2,"name":"i_mand","rpm":0.01},
    {"frequency":7,"name":"p_mand","rpm":0.04},
    {"frequency":1,"name":"prompt","rpm":0.01}
  ]
}

// FUNCTIONS:


  function csvMaker(s, d) {
    //If JSONData is not an object then JSON.parse parses the string in an object
    var arrData = s;

    // This variable is where all the data extracted from the object array is stored
    var CSV = "";
    CSV += "Session Summary" + "\r\n\n";
    CSV += "Name:," + sessionData.name + ",\r\n";
    CSV += "Description:," + sessionData.description + ",\r\n";
    CSV += "Code Set:," + sessionData.codeSetName + ",\r\n";
    //use moment here \/
    CSV += "Started:," + sessionData.startDate + ",\r\n";
    CSV += "Ended:," + sessionData.endDate + ",\r\n\n";
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
    fileName += sessionData.name.replace(/ /g,"_");
    var uri = "data:text/csv;charset=utf-8," + encodeURI(CSV);

    var link = document.createElement("a");
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
