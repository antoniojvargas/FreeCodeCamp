

$(document).ready(function() {

  $("#buttonsearch").click(function() {

    var term = $("#search").val();
    var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=" + term;       
    var localLink;

    $.ajax({
      type : "GET",
      url : url,
      async : false,
      dataType: "json",
      success: function(data) {
        localLink = data["query"]["search"][0]["title"];
        localLink = "https://en.wikipedia.org/wiki/" + localLink.split(" ").join("_");
        $("#output").empty();
        
        for (i = 0; i < data["query"]["search"].length; i++) {
          $("#output").append("<li class=\"well\"><a href= " + localLink + " target=\"_blank\">" + 
           data["query"]["search"][i]["title"] + "</a><p>" + data["query"]["search"][i]["snippet"] + "</p></li>");
        }
      },
      error : function (errormsg) {
        console.log(errormsg);        
      }
    });   

  });

});