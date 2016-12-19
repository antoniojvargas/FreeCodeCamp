$(document).ready(function() {

  var expresion = "";

  $('#ac').click(function() {
    expresion = "";
    $('#display').text(expresion);
  });
  $('#ce').click(function() {
    //var newDisplay = $('#display').text();
    expresion = expresion.slice(0,expresion.length-1)
    $('#display').text(expresion);
  });


  $('#mod').click(function() {
    expresion = expresion + "%";
    $('#display').text(expresion);
  });
  $('#sum').click(function() {
    expresion = expresion + "+";
    $('#display').text(expresion);
  });
  $('#multiplication').click(function() {
    expresion = expresion + "*";
    $('#display').text(expresion);
  });
  $('#minus').click(function() {
    expresion = expresion + "-";
    $('#display').text(expresion);
  });
  $('#division').click(function() {
    expresion = expresion + "/";
    $('#display').text(expresion);
  });
  $('#point').click(function() {
    expresion = expresion + ".";
    $('#display').text(expresion);
  });
  $('#equal').click(function() {
    expresion = eval(expresion);
    $('#display').text(expresion);
  });


  $('#0').click(function() {
    if(expresion.length < 13){
      expresion = expresion + "0";
      $('#display').text(expresion);   
    }

  });
  $('#1').click(function() {
    if(expresion.length < 13){
      expresion = expresion + "1";
      $('#display').text(expresion);
    }
  });
  $('#2').click(function() {
    if(expresion.length < 13){
      expresion = expresion + "2";
      $('#display').text(expresion);
    }
  });
  $('#3').click(function() {
    if(expresion.length < 13){
      expresion = expresion + "3";
      $('#display').text(expresion);
    }
  });
  $('#4').click(function() {
    if(expresion.length < 13){
      expresion = expresion + "4";
      $('#display').text(expresion);
    }
  });
  $('#5').click(function() {
    if(expresion.length < 13){
      expresion = expresion + "5";
      $('#display').text(expresion);
    }
  });
  $('#6').click(function() {
    if(expresion.length < 13){
      expresion = expresion + "6";
      $('#display').text(expresion);
    }
  });
  $('#7').click(function() {
    if(expresion.length < 13){
      expresion = expresion + "7";
      $('#display').text(expresion);
    }
  });
  $('#8').click(function() {
    if(expresion.length < 13){
      expresion = expresion + "8";
      $('#display').text(expresion);
    }
  });
  $('#9').click(function() {
    if(expresion.length < 13){
      expresion = expresion + "9";
      $('#display').text(expresion);
    }
  });

}); 

