var gridSquares;
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;

function keyup(event) {
	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.className = 'character stand ' + lastPressed;
}


function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		var newTop = positionTop+1;

		var element = document.elementFromPoint(player.offsetLeft, newTop+32);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk down';
			}
		}
	}
	if (upPressed) {
		var newTop = positionTop-1;

		var element = document.elementFromPoint(player.offsetLeft, newTop -3);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}
		
		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk up';
			}
		}
	}
	if (leftPressed) {
		var newLeft = positionLeft-1;

		var element = document.elementFromPoint(newLeft, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';	
		}


		player.className = 'character walk left';
	}
	if (rightPressed) {
		var newLeft = positionLeft+1;
		
		var element = document.elementFromPoint(newLeft+32, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';		
		}

		player.className = 'character walk right';
	}

}


function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}


function myLoadFunction() {
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);

//alienmove

function myclickFunction() {
	var button = document.getElementsByClassName('start');
	button[0].style.opacity = '0';
	var enter = document.getElementsByClassName('alien');
	enter[0].style.top = 0 + 'px';
	var jet = enter.offsetLeft;
	
	setInterval (function(){
		var random = Math.ceil (Math.random()*1100);
		enter[0].style.left = random + 'px';
    }, 800);

//createbomb()

    setInterval(function createBomb(){
	var firstBomb = document.getElementsByTagName('div')[7];
	var secondBomb = document.createElement('div');
	firstBomb.appendChild(secondBomb);
	secondBomb.className="bomb";

//dropbomb

    setInterval(function droppingBomb(){
	var positionOfBomb = secondBomb.offsetTop;
	secondBomb.style.top = positionOfBomb + 5 +'px';
    },8)
    setInterval(function randomBomb(){
	var randomZ = Math.floor(Math.random()*1000);
	secondBomb.style.left = randomZ + 'px';
    },1400)
    },1000)
}
 //startbutton
function mycallFunction() {
    var element = document.getElementsByClassName('start');
	element[0].addEventListener('click', myclickFunction);
	element[0].style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', mycallFunction); 



function bombMovement() {
	let randomIndex = Math.floor(Math.random() * alien.length)
	let bombStart = alien[randomIndex]

	const bombInterval = setInterval(() => { 
      if (gridSquares[player].classList.contains('bomb') && lives > 0) {
		gridSquares[bombStart].classList.remove('bomb')
		lives -= 1
		livesCounter.innerHTML = '<h2>${lives}</h2>'
	  } else if (lives === 0) {

		  gameOver.style.display = 'flex'
		  clearInterval(interval)
		  clearInterval(bombInterval)

	  }else if ((bombStart > (width ** 2) - width -1)) {

		gridSquares[bombStart].classList.remove('bomb')
		clearInterval(bombInterval)
	  }else {
		  gridSquares[bombStart].classList.remove('bomb')
		  bombStart += width
		  gridSquares[bombStart].classList.add('bomb')
	  }
	}, 600)
};

document.addEventListener('DOMContentLoaded', bombMovement);