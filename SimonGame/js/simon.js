var sequence = [];
var player = [];
var seqCopy;
var strict = false;
var power = false;
var round;
var win = false;
var lock = false;
var speed = 800;

var greenAudio  = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var redAudio    = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var yellowAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var blueAudio   = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");	

$(".power-button").on("click", onOff);
$(".strict-button").on("click", strictOpt);
$(".start-button").on("click", startOpt);

function onOff() {
  $(".power-button").toggleClass("float-left float-right");
  if ($(".power-button").hasClass("float-right")) {
    power = true;
    round = 0;
    $('.round-number').text(round);
  } else {
    $(".strict-button").removeClass("brighten");
    strict = false;
    power = false;
    resetGame();
    round = "--";
    $('.round-number').text(round);
  }
}

function startOpt() {
  if (power == true) {
    $(".start-button").toggleClass("brighten");
    if ($(".start-button").hasClass("brighten")) {
      lock = true;
      NewRound();
    } else {
      resetGame();
    }
  }
}	

function strictOpt() {
	if (power == true && lock == false) {
		$(".strict-button").toggleClass("brighten");
		if($(".strict-button").hasClass("brighten")){
			strict = true;
		} else {
			strict = false;
		}		
	}
}	

function updateRound() {
	$('.round-number').text(round);
}

function strictON() {
	document.getElementById("gameTitle").innerHTML = "Simon<sup>®</sup>";
	$('.round-number').text(round);
	if (strict == true) {
		win = false;
		gameOver();
		resetGame();
	} else {
		player = [];
		animate();
	}
}

function NewRound() {
	//Green: 1   Red: 2   Blue: 3   Yellow: 4
	var color = Math.floor(Math.random() * 4) + 1;
	sequence.push(color);
	seqCopy = sequence.slice(0);
	player = [];

	animate();
	round += 1;
	$('.round-number').text(round);
}		

function animate() {
	var i = 0;
	var interval = setInterval(function() {
		LightUp(sequence[i]);

		i++;
		if (i >= sequence.length) {
			clearInterval(interval);
		}
	}, speed);
}	

function LightUp(tile) {
	//Green: 1   Red: 2   Blue: 3   Yellow: 4
	var $tile;
	switch(tile){
		case 1:
			$tile = $(".green").addClass('brighten');
			greenAudio.play();
		break;
		case 2:
			$tile = $(".red").addClass('brighten');
			redAudio.play();
		break;
		case 3:
			$tile = $(".blue").addClass('brighten');
			yellowAudio.play();
		break;
		case 4:
			$tile = $(".yellow").addClass('brighten');
			blueAudio.play();
		break;
	}
		window.setTimeout(function() {
		$tile.removeClass('brighten');
	}, speed / 2);
}

$(".container").on("click", playerMove).on("mousedown", function() {
	if (power == true && lock == true) {
		$(this).toggleClass("brighten");
	}
}).on("mouseup", function() {
	if (power == true && lock == true) {
		$(this).toggleClass("brighten");
	}
});

function playerMove() {
	if (power == true && lock == true) {
		var position = $(this).data("tile");
		player.push(position);
		if (player[player.length - 1] !== sequence[player.length - 1]) {
			$(".title").text("Wrong");
			$(".round-number").text("?_?");
			setTimeout(strictON, 1000);
		} else {
			switch(position){
			case 1:
				greenAudio.play();
				break;
			case 2:
				redAudio.play();
				break;
			case 3:
				yellowAudio.play();
				break;
			case 4:
				blueAudio.play();
				break;
			}	      	
			if (sequence.length === player.length) {
				if (round === 5) {
					win = true;
					gameOver();
				} else {
					NewRound();
				}
			}
		}
	}
}	

function gameOver() {
	if (win == true) {
		$(".title").text("Win!!!");
		$(".round-number").text("^_^");
		setTimeout(resetGame, 2000);
	} 	
}

function resetGame() {
	$(".start-button").removeClass("brighten");
	document.getElementById("gameTitle").innerHTML = "Simon<sup>®</sup>";
	sequence = [];
	player = [];
	round = 0;
	$('.round-number').text(round);
	lock = false;
	speed = 600;
}	
