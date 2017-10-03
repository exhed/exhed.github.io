// The variables that are used later on
var turn = "X";
var count= 0;
var gameOver = false;
var x_win = 0;
var o_win = 0;

//uses an array to set up the board
var board = [
[" "," ", " "],
[" "," ", " "],
[" "," ", " "]
];

var active = [
[true, true, true],
[true, true, true],
[true, true, true]
];
//Makes the buttons turn either X or O depending on the count, and tells the HTML what to do
function clickTTT(r, c)
{
	if(active[r][c])
	{
		count ++;
		active[r][c] = false;

		board[r][c] = turn;
		document.getElementById("cont"+r+c).innerHTML = turn;

		checkBoard();

		if (gameOver)
		{
			clearBoard();
		}
		else
		{
			if (count % 2 === 1)
			{
				turn = "O";
			}
			else
			{
				turn = "X";
			}
		}

	}
}

function checkBoard()
{
		//checkrows

		for (var r=0; r<3; r++)
		{
			if (board[r][0] == turn && board[r][1] == turn && board[r][2] == turn)
			{
				playSound('xando');
				if (turn == "X")
				{
					x_win++;
					document.getElementById("x-wins").innerHTML = "X Wins: " + x_win;
				}
				else
				{
					o_win++;
					document.getElementById("o-wins").innerHTML ="O Wins: " + o_win;
				}
				alert(turn + 'wins!');
				stopSound('xando');
				gameOver = true;
			}
		}


		//check columns


		for (var c=0; c<3; c++)
		{
			if (board[0][c] == turn && board[1][c] == turn && board[2][c] == turn)
			{
				playSound('xando');
				if (turn == "X")
				{
					x_win++;
					document.getElementById("x-wins").innerHTML = "X Wins: " + x_win;
				}
				else
				{
					o_win++;
					document.getElementById("o-wins").innerHTML ="O Wins: " + o_win;
				}
				alert(turn + 'wins!');
				stopSound('xando');
				gameOver = true;
			}
		}

		//check diagonols
			if (board[0][0] == turn && board[1][1] == turn && board[2][2] == turn)
			{
				playSound('xando');
				if (turn == "X")
				{
					x_win++;
					document.getElementById("x-wins").innerHTML = "X Wins: " + x_win;
				}
				else
				{
					o_win++;
					document.getElementById("o-wins").innerHTML ="O Wins: " + o_win;
				}
				alert(turn + 'wins!');
				stopSound('xando');
				gameOver = true;
			}
				if (board[0][2] == turn && board[1][1] == turn && board[2][0] == turn)
			{
				playSound('xando');
				if (turn == "X")
				{
					x_win++;
					document.getElementById("x-wins").innerHTML = "X Wins: " + x_win;
				}
				else
				{
					o_win++;
					document.getElementById("o-wins").innerHTML ="O Wins: " + o_win;
				}
				alert(turn + 'wins!');
				stopSound('xando');
				gameOver = true;
			}

		//check tie
		checkDraw();
}

function checkDraw()
{
	var emptyCount = 0;

	for (var r =0; r < 3; r++)
	{
		for (var c = 0; c < 3; c++)
		{
			if (board[r][c] == " ")
			{
				emptyCount ++;
			}
		}
	}

	if (emptyCount == 0)
	{
		gameOver = true;
		alert("Tie Game!");
	}
}


//Code for clearing board
function clearBoard()  //board = clearBoard()
{
	gameOver = false;
	turn = "X";
	count= 0;


	clearHtml();
	board = [
		[" "," ", " "],
		[" "," ", " "],
		[" "," ", " "]
		];

active = [
		[true, true, true],
		[true, true, true],
		[true, true, true]
		];

}
//Code that tells HTML to clear code
function clearHtml()
{
	for(var r = 0; r < 3; r++)
	{
		for(var c = 0; c < 3; c++)
		{
			document.getElementById("cont"+r+c).innerHTML = " ";
		}
	}
}
//Sounds for the website
function playSound(soundobj)
{
	var thissound = document.getElementById(soundobj);
	thissound.play();
}

function stopSound(soundobj)
{
	var thissound = document.getElementById(soundobj);
	thissound.pause();
	thissound.cu
}