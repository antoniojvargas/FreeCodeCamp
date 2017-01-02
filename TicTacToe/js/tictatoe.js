	var gameStarted = false;
	var playerChar = "";
	var computerChar = "";
	var currentChar = "";
	var moves = 0;

	$(".board-button").on("click", markBoard);

	function markBoard(){
		if(gameStarted){
			currentChar = playerChar;
			var currentCell = $(this).attr("id");
			var cellText = $("#" + currentCell).text();
	
			if(cellText === ""){
				moves++;
				document.getElementById(currentCell).style.color = "#FFFFE5";
				$("#" + currentCell).text(playerChar);
				checkWiningCombo();
				if(gameStarted){
					computerPlay();
				}
				
			}else{
				console.log("no vacio");
			}			
		}
	};

	function computerPlay(){
		moves++;
		currentChar = computerChar;
	
		switch(true) {
			case $("#cell3").text() !== playerChar && $("#cell3").text() !== computerChar:
				document.getElementById("cell3").style.color = "#202020";
				$("#cell3").text(computerChar);
				break;
			case $("#cell4").text() !== playerChar && $("#cell4").text() !== computerChar:
				document.getElementById("cell4").style.color = "#202020";
				$("#cell4").text(computerChar);
				break;

			case $("#cell1").text() !== playerChar && $("#cell1").text() !== computerChar:
				document.getElementById("cell1").style.color = "#202020";
				$("#cell1").text(computerChar);
				break;
			case $("#cell2").text() !== playerChar && $("#cell2").text() !== computerChar:
				document.getElementById("cell2").style.color = "#202020";
				$("#cell2").text(computerChar);
				break;
			case $("#cell7").text() !== playerChar && $("#cell7").text() !== computerChar:
				document.getElementById("cell7").style.color = "#202020";
				$("#cell7").text(computerChar);
				break;
			case $("#cell8").text() !== playerChar && $("#cell8").text() !== computerChar:
				document.getElementById("cell8").style.color = "#202020";
				$("#cell8").text(computerChar);
				break;
			case $("#cell9").text() !== playerChar && $("#cell9").text() !== computerChar:
				document.getElementById("cell9").style.color = "#202020";
				$("#cell9").text(computerChar);
				break; 

			case $("#cell5").text() !== playerChar && $("#cell5").text() !== computerChar:
				document.getElementById("cell5").style.color = "#202020";
				$("#cell5").text(computerChar);
				break;
			case $("#cell6").text() !== playerChar && $("#cell6").text() !== computerChar:
				document.getElementById("cell6").style.color = "#202020";
				$("#cell6").text(computerChar);
				break;

		}
		checkWiningCombo();
	};	

	function checkWiningCombo(){
		if(moves === 9){
			gameStarted = false;	
			setTimeout(clearBoard, 2000);
		}
		switch(true){
			case $("#cell1").text() === currentChar && $("#cell2").text() === currentChar && $("#cell3").text() === currentChar: 
				document.getElementById("cell1").style.color = "#FF3E3E";
				document.getElementById("cell2").style.color = "#FF3E3E";
				document.getElementById("cell3").style.color = "#FF3E3E";
				gameStarted = false;	
				setTimeout(clearBoard, 2000);
			break;
			case $("#cell4").text() === currentChar && $("#cell5").text() === currentChar && $("#cell6").text() === currentChar: 
				document.getElementById("cell4").style.color = "#FF3E3E";
				document.getElementById("cell5").style.color = "#FF3E3E";
				document.getElementById("cell6").style.color = "#FF3E3E";
				gameStarted = false;
				setTimeout(clearBoard, 2000);
			break;
			case $("#cell7").text() === currentChar && $("#cell8").text() === currentChar && $("#cell9").text() === currentChar: 
				document.getElementById("cell7").style.color = "#FF3E3E";
				document.getElementById("cell8").style.color = "#FF3E3E";
				document.getElementById("cell9").style.color = "#FF3E3E";
				gameStarted = false;
				setTimeout(clearBoard, 2000);
			break;
			case $("#cell1").text() === currentChar && $("#cell4").text() === currentChar && $("#cell7").text() === currentChar: 
				document.getElementById("cell1").style.color = "#FF3E3E";
				document.getElementById("cell4").style.color = "#FF3E3E";
				document.getElementById("cell7").style.color = "#FF3E3E";
				gameStarted = false;
				setTimeout(clearBoard, 2000);
			break;
			case $("#cell2").text() === currentChar && $("#cell5").text() === currentChar && $("#cell8").text() === currentChar: 
				document.getElementById("cell2").style.color = "#FF3E3E";
				document.getElementById("cell5").style.color = "#FF3E3E";
				document.getElementById("cell8").style.color = "#FF3E3E";
				gameStarted = false;
				setTimeout(clearBoard, 2000);
			break;
			case $("#cell3").text() === currentChar && $("#cell6").text() === currentChar && $("#cell9").text() === currentChar: 
				document.getElementById("cell3").style.color = "#FF3E3E";
				document.getElementById("cell6").style.color = "#FF3E3E";
				document.getElementById("cell9").style.color = "#FF3E3E";
				gameStarted = false;
				setTimeout(clearBoard, 2000);
			break;
			case $("#cell1").text() === currentChar && $("#cell5").text() === currentChar && $("#cell9").text() === currentChar: 
				document.getElementById("cell1").style.color = "#FF3E3E";
				document.getElementById("cell5").style.color = "#FF3E3E";
				document.getElementById("cell9").style.color = "#FF3E3E";
				gameStarted = false;
				setTimeout(clearBoard, 2000);
			break;
			case $("#cell3").text() === currentChar && $("#cell5").text() === currentChar && $("#cell7").text() === currentChar: 
				document.getElementById("cell3").style.color = "#FF3E3E";
				document.getElementById("cell5").style.color = "#FF3E3E";
				document.getElementById("cell7").style.color = "#FF3E3E";
				gameStarted = false;
				setTimeout(clearBoard, 2000);
			break;
		}
	};

	function clearBoard(){		
		$("#cell1").text("");document.getElementById("cell1").style.color = "#FFFFE5";
		$("#cell2").text("");document.getElementById("cell2").style.color = "#FFFFE5";
		$("#cell3").text("");document.getElementById("cell3").style.color = "#FFFFE5";
		$("#cell4").text("");document.getElementById("cell4").style.color = "#FFFFE5";
		$("#cell5").text("");document.getElementById("cell5").style.color = "#FFFFE5";
		$("#cell6").text("");document.getElementById("cell6").style.color = "#FFFFE5";
		$("#cell7").text("");document.getElementById("cell7").style.color = "#FFFFE5";
		$("#cell8").text("");document.getElementById("cell8").style.color = "#FFFFE5";
		$("#cell9").text("");document.getElementById("cell9").style.color = "#FFFFE5";
		moves = 0;
	};

	$("#X").click(function() {
		playerChar = "X";
		computerChar = "O";	
		gameStarted = true;	
		computerPlay();
	});

	$("#O").click(function() {	
		playerChar = "O";
		computerChar = "X";	
		gameStarted = true;	
		computerPlay();	
	});
