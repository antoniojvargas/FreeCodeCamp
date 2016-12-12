var channels = ["ESL_SC2", "OgamingSC2", "freecodecamp", "storbeck", "RobotCaleb"];

$(document).ready(function() {
  channels.forEach(function(channel) {
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channel + "?callback=?", function(dataStream) {

      var status,game;
      if(dataStream["stream"] === null){
        game = "Offline";
        status = "offline";
      } else if (dataStream["stream"] === undefined){   
        game = "Account Closed";     
        status = "offline";
      } else {
        game = dataStream["stream"]["game"];
        status = "online";
      };
      $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + channel + "?callback=?", function(data){

        var name = data.display_name != null ? data.display_name : channel;
        var description = status === "online" ? ': ' + data.status : "";

        html = "<div class=\"row " + status + "\"><div class=\"col-xs-2 \" id=\"icon\"><img src=\"" + data.logo + 
               "\" class=\"logo\"></div><div class=\"col-xs-10 \" id=\"name\"><a href=\"" + data.url + 
               "\" target=\"_blank\">" + name + "</a></div><div class=\"col-xs-12 \" id=\"streaming\">" + 
               game + " " + description + "</div></div>";        

        if(status === "online"){
          $("#chanelInfo").prepend(html);
        } else {
          $("#chanelInfo").append(html);
        }

      });
    });
  });


 }); 

function check(optradio) {
  if(optradio === "all") {
    $(".online").show();
    $(".offline").show();
  } else if (optradio === "on") {
    $(".online").show();
    $(".offline").hide();
  } else if (optradio === "off") {
    console.log("off");
    $(".online").hide();
    $(".offline").show();
  }
}
