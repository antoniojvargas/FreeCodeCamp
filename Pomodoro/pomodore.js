

$(document).ready(function() {

	var breaklength = parseInt($("#breaklength").text());
	var sessionlength= parseInt($("#sessionlength").text());
	var working = true;

	var actualTime = sessionlength * 60;
	
	var minutes = 0;
	var seconds = 0;

	var counter;

	// Break Length
	$('#minusbreak').click(function() {
		if(breaklength > 1){
			breaklength--;
			$("#breaklength").text(breaklength);
		}
	});

	$('#plusbreak').click(function() {
		breaklength++;
	  	$("#breaklength").text(breaklength);
	});

	//Session
	$('#minussession').click(function() {
		if(sessionlength > 1){
			sessionlength--;
			$("#sessionlength").text(sessionlength);
		}
	});

	$('#plussession').click(function() {
		sessionlength++;
	  	$("#sessionlength").text(sessionlength);
	});

	
	

	$('#start').click(function() {
		breaklength = parseInt($("#breaklength").text());
		sessionlength = parseInt($("#sessionlength").text());
		actualTime = sessionlength * 60;
		$("#minusbreak").hide();
		$("#plusbreak").hide();
		$("#minussession").hide();
		$("#plussession").hide();
		var drop;
		var watercolor = "#FFFFFF";

		counter = setInterval(timer,1000);
		working = true;

		function timer(){
			actualTime-=1;
			if(actualTime === 0){
				if(working){
					actualTime = breaklength * 60;
					working = false;
					document.getElementById("timer").style.color = "#FDF98B";
					watercolor = "#FDF98B";
				} else {
					actualTime = sessionlength * 60;
					working = true;
					document.getElementById("timer").style.color = "#FFFFFF";
					watercolor = "#FFFFFF";
				}
			}
			if(working){
				drop = 1 - (actualTime / (sessionlength * 60));
			} else {
				drop = 1 - (actualTime / (breaklength * 60));
			}
			minutes = Math.floor(actualTime / 60);
			seconds = actualTime % 60;
			$("#timer").text( ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2) );
			$("#chart").waterbubble({
				data: drop,
				radius: 130,
				animation: false,
				wave: false,
				waterColor: watercolor,
			});			
		}
	});

	$('#reset').click(function() {
		started = false;
		$("#timer").text("00:00");
		breaklength = 5;
	  	$("#breaklength").text(breaklength);
	  	sessionlength = 25;
	  	$("#sessionlength").text(sessionlength);
	  	clearInterval(counter);
	  	document.getElementById("timer").style.color = "#FFFFFF";
	  	$("#minusbreak").show();
		$("#plusbreak").show();
		$("#minussession").show();
		$("#plussession").show();
		$("#chart").waterbubble({
			data: 0.0,
			radius: 130,
			animation: false,
			wave: false,
			waterColor: '#FFFFFF'
		});			
	});


	$('#chart').waterbubble({
		// bubble size
		radius: 130,
		// border width
		lineWidth: undefined,
		// data to present
		data: 0.0,
		// color of the water bubble
		waterColor: '#FFFFFF',
		// text color
		textColor: '#FFFFFF',
		// custom font family
		font: '',
		// show wave
		wave: false,
		// custom text displayed inside the water bubble
		txt: undefined,
		// enable water fill animation
		animation: false
	  });


});