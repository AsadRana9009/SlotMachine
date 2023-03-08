var doing = false;
var spin = [new Audio("res/sounds/spin.mp3"), new Audio("res/sounds/spin.mp3"), new Audio("res/sounds/spin.mp3"), new Audio("res/sounds/spin.mp3"), new Audio("res/sounds/spin.mp3"), new Audio("res/sounds/spin.mp3"), new Audio("res/sounds/spin.mp3")];
var coin = [new Audio("res/sounds/coin.mp3"), new Audio("res/sounds/coin.mp3"), new Audio("res/sounds/coin.mp3")]
var win = new Audio("res/sounds/win.mp3");
var lose = new Audio("res/sounds/lose.mp3");
var audio = false;

let statuss = document.getElementById("status")

let total_money1 = document.getElementById("total_money")
let winning1 = document.getElementById("winning")
let lose1 = document.getElementById("lose")
var total_money_amount = 1000
var winning_count = 0
var lose_count = 0

var start_play = 0;
var afterWon = 0;


var info = true;

function doSlot() {
	start_play = 1;
	afterWon = 0;
	if (doing) { return null; }
	if (total_money_amount - 50 < 0) return null;
	doing = true;
	var numChanges = randomInt(1, 4) * 7
	var numeberSlot1 = numChanges + randomInt(1, 7)
	var numeberSlot2 = numChanges + 2 * 7 + randomInt(1, 7)
	var numeberSlot3 = numChanges + 4 * 7 + randomInt(1, 7)

	var numeberSlot4 = randomInt(7, numeberSlot1 - 1)
	var numeberSlot5 = randomInt(7, numeberSlot2 - 1)
	var numeberSlot6 = randomInt(7, numeberSlot3 - 1)

	var numeberSlot7 = randomInt(7, numeberSlot1)
	var numeberSlot8 = randomInt(7, numeberSlot2)
	var numeberSlot9 = randomInt(7, numeberSlot3)

	var i1 = 0;
	var i2 = 0;
	var i3 = 0;

	var i4 = 0;
	var i5 = 0;
	var i6 = 0;

	var i7 = 0;
	var i8 = 0;
	var i9 = 0;

	var sound = 0
	statuss.innerHTML = "SPINNING"
	total_money_amount -= 50
	total_money1.innerHTML = "money=" + total_money_amount + "$"

	slot1 = setInterval(spin1, 50);
	slot2 = setInterval(spin2, 50);
	slot3 = setInterval(spin3, 50);

	slot4 = setInterval(spin4, 50);
	slot5 = setInterval(spin5, 50);
	slot6 = setInterval(spin6, 50);

	slot7 = setInterval(spin7, 50);
	slot8 = setInterval(spin8, 50);
	slot9 = setInterval(spin9, 50);


	function spin1() {
		i1++;
		if (i1 >= numeberSlot1) {
			coin[0].play()
			clearInterval(slot1);
			return null;
		}
		slotTile1 = document.getElementById("slot1");
		if (slotTile1.className == "a7") {
			slotTile1.className = "a0";
		}
		slotTile1.className = "a" + (parseInt(slotTile1.className.substring(1)) + 1)
	}
	function spin2() {
		i2++;
		if (i2 >= numeberSlot2) {
			coin[1].play()
			clearInterval(slot2);
			return null;
		}
		slotTile2 = document.getElementById("slot2");
		if (slotTile2.className == "a7") {
			slotTile2.className = "a0";
		}
		slotTile2.className = "a" + (parseInt(slotTile2.className.substring(1)) + 1)
	}
	function spin3() {
		i3++;
		if (i3 >= numeberSlot3) {
			coin[2].play()
			clearInterval(slot3);
			testWin();
			return null;
		}
		slotTile3 = document.getElementById("slot3");
		if (slotTile3.className == "a7") {
			slotTile3.className = "a0";
		}
		sound++;
		if (sound == spin.length) {
			sound = 0;
		}
		spin[sound].play();
		slotTile3.className = "a" + (parseInt(slotTile3.className.substring(1)) + 1)
	}

	function spin4() {
		i4++;
		if (i4 >= numeberSlot4) {
			//coin[0].play()
			clearInterval(slot4);
			return null;
		}
		slotTile4 = document.getElementById("slot4");
		if (slotTile4.className == "a7") {
			slotTile4.className = "a0";
		}
		slotTile4.className = "a" + (parseInt(slotTile4.className.substring(1)) + 1)
	}

	function spin5() {
		i5++;
		if (i5 >= numeberSlot5) {
			//coin[0].play()
			clearInterval(slot5);
			return null;
		}
		slotTile5 = document.getElementById("slot5");
		if (slotTile5.className == "a7") {
			slotTile5.className = "a0";
		}
		slotTile5.className = "a" + (parseInt(slotTile5.className.substring(1)) + 1)
	}

	function spin6() {
		i6++;
		if (i6 >= numeberSlot6) {
			//coin[0].play()
			clearInterval(slot6);
			return null;
		}
		slotTile6 = document.getElementById("slot6");
		if (slotTile6.className == "a7") {
			slotTile6.className = "a0";
		}
		slotTile6.className = "a" + (parseInt(slotTile6.className.substring(1)) + 1)
	}


	function spin7() {
		i7++;
		if (i7 >= numeberSlot7) {
			//coin[0].play()
			clearInterval(slot7);
			return null;
		}
		slotTile7 = document.getElementById("slot7");
		if (slotTile7.className == "a7") {
			slotTile7.className = "a0";
		}
		slotTile7.className = "a" + (parseInt(slotTile7.className.substring(1)) + 1)
	}

	function spin8() {
		i8++;
		if (i8 >= numeberSlot8) {
			//coin[0].play()
			clearInterval(slot8);
			return null;
		}
		slotTile8 = document.getElementById("slot8");
		if (slotTile8.className == "a7") {
			slotTile8.className = "a0";
		}
		slotTile8.className = "a" + (parseInt(slotTile8.className.substring(1)) + 1)
	}

	function spin9() {
		i9++;
		if (i9 >= numeberSlot9) {
			//coin[0].play()
			clearInterval(slot9);
			return null;
		}
		slotTile9 = document.getElementById("slot9");
		if (slotTile9.className == "a7") {
			slotTile9.className = "a0";
		}
		slotTile9.className = "a" + (parseInt(slotTile9.className.substring(1)) + 1)
	}
}

function testWin() {
	var slot1 = document.getElementById("slot1").className
	var slot2 = document.getElementById("slot2").className
	var slot3 = document.getElementById("slot3").className


	var slot4 = document.getElementById("slot4").className
	var slot5 = document.getElementById("slot5").className
	var slot6 = document.getElementById("slot6").className


	var slot7 = document.getElementById("slot7").className
	var slot8 = document.getElementById("slot8").className
	var slot9 = document.getElementById("slot9").className

	if ((slot1 == slot2 && slot2 == slot3) ||
		(slot1 == slot2 && slot3 == "a7") ||
		(slot1 == slot3 && slot2 == "a7") ||
		(slot2 == slot3 && slot1 == "a7") ||

		(slot4 == slot5 && slot5 == slot6) ||
		(slot4 == slot5 && slot6 == "a7") ||
		(slot4 == slot6 && slot5 == "a7") ||
		(slot5 == slot6 && slot4 == "a7") ||

		(slot7 == slot8 && slot8 == slot9) ||
		(slot7 == slot8 && slot9 == "a7") ||
		(slot7 == slot9 && slot8 == "a7") ||
		(slot8 == slot9 && slot7 == "a7") ||

		(slot1 == slot4 && slot4 == slot7) ||
		(slot2 == slot5 && slot5 == slot8) ||
		(slot3 == slot6 && slot6 == slot9) ||

		(slot1 == slot5 && slot5 == slot9) ||
		(slot1 == slot5 && slot9 == "a7") ||
		(slot1 == slot9 && slot5 == "a7") ||
		(slot5 == slot9 && slot1 == "a7") ||

		(slot3 == slot5 && slot5 == slot7) ||
		(slot3 == slot5 && slot7 == "a7") ||
		(slot3 == slot7 && slot5 == "a7") ||
		(slot5 == slot7 && slot3 == "a7")


	) {
		statuss.innerHTML = "YOU WIN!";
		winning_count += 1
		winning1.innerHTML = "winning=" + winning_count
		total_money_amount += 500
		total_money1.innerHTML = "money=" + total_money_amount + "$"
		win.play();
		afterWon = 1;
		effectsAfterWin(1000);
	} else {
		statuss.innerHTML = "YOU LOSE!"
		lose_count += 1
		lose1.innerHTML = "lose=" + lose_count
		lose.play();
	}
	doing = false;
}

function toggleAudio() {
	if (!audio) {
		audio = !audio;
		for (var x of spin) {
			x.volume = 0.5;
		}
		for (var x of coin) {
			x.volume = 0.5;
		}
		win.volume = 1.0;
		lose.volume = 1.0;
	} else {
		audio = !audio;
		for (var x of spin) {
			x.volume = 0;
		}
		for (var x of coin) {
			x.volume = 0;
		}
		win.volume = 0;
		lose.volume = 0;
	}
	document.getElementById("audio").src = "res/icons/audio" + (audio ? "On" : "Off") + ".png";
}

function randomInt(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

//this function will change background image every 1 second
function changeBackground(interval, frames) {
	var bg_number = 1;

	function func() {
		document.body.id = "bg" + bg_number;
		bg_number++;
		if (bg_number === frames + 1) { bg_number = 1; }
	}

	var swap = window.setInterval(func, interval);
}
changeBackground(1000, 4); //ms , frames

//show signs of win before start the game
function signOfWins(interval) {

	var counter = 0;
	function func() {
		if (start_play == 1) {
			clearColors();
			return null;
		}
		//row 1
		if (counter == 0) {
			document.getElementById("slot1").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
			document.getElementById("slot2").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
			document.getElementById("slot3").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;

			document.getElementById("slot4").style.backgroundColor = null;
			document.getElementById("slot5").style.backgroundColor = null;
			document.getElementById("slot6").style.backgroundColor = null;
			document.getElementById("slot7").style.backgroundColor = null;
			document.getElementById("slot8").style.backgroundColor = null;
			document.getElementById("slot9").style.backgroundColor = null;

		}
		//row 2
		else if (counter == 1) {
			document.getElementById("slot4").style.backgroundColor = `rgb(${10}, ${100}, ${200})`;
			document.getElementById("slot5").style.backgroundColor = `rgb(${10}, ${100}, ${200})`;
			document.getElementById("slot6").style.backgroundColor = `rgb(${10}, ${100}, ${200})`;


			document.getElementById("slot1").style.backgroundColor = null;
			document.getElementById("slot2").style.backgroundColor = null;
			document.getElementById("slot3").style.backgroundColor = null;
			document.getElementById("slot7").style.backgroundColor = null;
			document.getElementById("slot8").style.backgroundColor = null;
			document.getElementById("slot9").style.backgroundColor = null;
		}
		//row 3
		else if (counter == 2) {

			document.getElementById("slot7").style.backgroundColor = `rgb(${10}, ${50}, ${70})`;
			document.getElementById("slot8").style.backgroundColor = `rgb(${10}, ${50}, ${70})`;
			document.getElementById("slot9").style.backgroundColor = `rgb(${10}, ${50}, ${70})`;

			document.getElementById("slot1").style.backgroundColor = null;
			document.getElementById("slot2").style.backgroundColor = null;
			document.getElementById("slot3").style.backgroundColor = null;
			document.getElementById("slot4").style.backgroundColor = null;
			document.getElementById("slot5").style.backgroundColor = null;
			document.getElementById("slot6").style.backgroundColor = null;
		}
		// col 1
		else if (counter == 3) {
			document.getElementById("slot1").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
			document.getElementById("slot4").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
			document.getElementById("slot7").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;

			document.getElementById("slot2").style.backgroundColor = null;
			document.getElementById("slot3").style.backgroundColor = null;
			document.getElementById("slot5").style.backgroundColor = null;
			document.getElementById("slot6").style.backgroundColor = null;
			document.getElementById("slot8").style.backgroundColor = null;
			document.getElementById("slot9").style.backgroundColor = null;

		}
		//col 2
		else if (counter == 4) {
			document.getElementById("slot2").style.backgroundColor = `rgb(${10}, ${100}, ${200})`;
			document.getElementById("slot5").style.backgroundColor = `rgb(${10}, ${100}, ${200})`;
			document.getElementById("slot8").style.backgroundColor = `rgb(${10}, ${100}, ${200})`;


			document.getElementById("slot1").style.backgroundColor = null;
			document.getElementById("slot3").style.backgroundColor = null;
			document.getElementById("slot4").style.backgroundColor = null;
			document.getElementById("slot6").style.backgroundColor = null;
			document.getElementById("slot7").style.backgroundColor = null;
			document.getElementById("slot9").style.backgroundColor = null;
		}
		//col 3
		else if (counter == 5) {

			document.getElementById("slot3").style.backgroundColor = `rgb(${10}, ${50}, ${70})`;
			document.getElementById("slot6").style.backgroundColor = `rgb(${10}, ${50}, ${70})`;
			document.getElementById("slot9").style.backgroundColor = `rgb(${10}, ${50}, ${70})`;

			document.getElementById("slot1").style.backgroundColor = null;
			document.getElementById("slot2").style.backgroundColor = null;
			document.getElementById("slot4").style.backgroundColor = null;
			document.getElementById("slot5").style.backgroundColor = null;
			document.getElementById("slot7").style.backgroundColor = null;
			document.getElementById("slot8").style.backgroundColor = null;
		}

		//radius 1
		else if (counter == 6) {

			document.getElementById("slot1").style.backgroundColor = `rgb(${10}, ${50}, ${70})`;
			document.getElementById("slot5").style.backgroundColor = `rgb(${10}, ${50}, ${70})`;
			document.getElementById("slot9").style.backgroundColor = `rgb(${10}, ${50}, ${70})`;

			document.getElementById("slot2").style.backgroundColor = null;
			document.getElementById("slot3").style.backgroundColor = null;
			document.getElementById("slot4").style.backgroundColor = null;
			document.getElementById("slot6").style.backgroundColor = null;
			document.getElementById("slot7").style.backgroundColor = null;
			document.getElementById("slot8").style.backgroundColor = null;
		}

		//radius 2
		else if (counter == 7) {

			document.getElementById("slot3").style.backgroundColor = `rgb(${10}, ${50}, ${70})`;
			document.getElementById("slot5").style.backgroundColor = `rgb(${10}, ${50}, ${70})`;
			document.getElementById("slot7").style.backgroundColor = `rgb(${10}, ${50}, ${70})`;

			document.getElementById("slot1").style.backgroundColor = null;
			document.getElementById("slot2").style.backgroundColor = null;
			document.getElementById("slot4").style.backgroundColor = null;
			document.getElementById("slot6").style.backgroundColor = null;
			document.getElementById("slot8").style.backgroundColor = null;
			document.getElementById("slot9").style.backgroundColor = null;
		}
		counter++;
		counter = counter % 8;
	}
	var swap = window.setInterval(func, interval);

}
signOfWins(1000);

function effectsAfterWin(interval) {
	var counter = 0;
	function func() {

		if (afterWon == 1) {
			if (counter % 2 == 0) {
				var slot1 = document.getElementById("slot1").className
				var slot2 = document.getElementById("slot2").className
				var slot3 = document.getElementById("slot3").className
				var slot4 = document.getElementById("slot4").className
				var slot5 = document.getElementById("slot5").className
				var slot6 = document.getElementById("slot6").className
				var slot7 = document.getElementById("slot7").className
				var slot8 = document.getElementById("slot8").className
				var slot9 = document.getElementById("slot9").className

				if ((slot1 == slot2 && slot2 == slot3) ||
					(slot1 == slot2 && slot3 == "a7") ||
					(slot1 == slot3 && slot2 == "a7") ||
					(slot2 == slot3 && slot1 == "a7")) {
					document.getElementById("slot1").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot2").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot3").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;

					document.getElementById("slot4").style.backgroundColor = null;
					document.getElementById("slot5").style.backgroundColor = null;
					document.getElementById("slot6").style.backgroundColor = null;
					document.getElementById("slot7").style.backgroundColor = null;
					document.getElementById("slot8").style.backgroundColor = null;
					document.getElementById("slot9").style.backgroundColor = null;

				}

				else if ((slot4 == slot5 && slot5 == slot6) ||
					(slot4 == slot5 && slot6 == "a7") ||
					(slot4 == slot6 && slot5 == "a7") ||
					(slot5 == slot6 && slot4 == "a7")) {
					document.getElementById("slot4").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot5").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot6").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;


					document.getElementById("slot1").style.backgroundColor = null;
					document.getElementById("slot2").style.backgroundColor = null;
					document.getElementById("slot3").style.backgroundColor = null;
					document.getElementById("slot7").style.backgroundColor = null;
					document.getElementById("slot8").style.backgroundColor = null;
					document.getElementById("slot9").style.backgroundColor = null;
				}

				else if ((slot7 == slot8 && slot8 == slot9) ||
					(slot7 == slot8 && slot9 == "a7") ||
					(slot7 == slot9 && slot8 == "a7") ||
					(slot8 == slot9 && slot7 == "a7")) {
					document.getElementById("slot7").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot8").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot9").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;

					document.getElementById("slot1").style.backgroundColor = null;
					document.getElementById("slot2").style.backgroundColor = null;
					document.getElementById("slot3").style.backgroundColor = null;
					document.getElementById("slot4").style.backgroundColor = null;
					document.getElementById("slot5").style.backgroundColor = null;
					document.getElementById("slot6").style.backgroundColor = null;
				}

				else if (slot1 == slot4 && slot4 == slot7) {
					document.getElementById("slot1").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot4").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot7").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;

					document.getElementById("slot2").style.backgroundColor = null;
					document.getElementById("slot3").style.backgroundColor = null;
					document.getElementById("slot5").style.backgroundColor = null;
					document.getElementById("slot6").style.backgroundColor = null;
					document.getElementById("slot8").style.backgroundColor = null;
					document.getElementById("slot9").style.backgroundColor = null;
				}
				else if (slot2 == slot5 && slot5 == slot8) {
					document.getElementById("slot2").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot5").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot8").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;


					document.getElementById("slot1").style.backgroundColor = null;
					document.getElementById("slot3").style.backgroundColor = null;
					document.getElementById("slot4").style.backgroundColor = null;
					document.getElementById("slot6").style.backgroundColor = null;
					document.getElementById("slot7").style.backgroundColor = null;
					document.getElementById("slot9").style.backgroundColor = null;
				}
				else if (slot3 == slot6 && slot6 == slot9) {
					document.getElementById("slot3").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot6").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot9").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;

					document.getElementById("slot1").style.backgroundColor = null;
					document.getElementById("slot2").style.backgroundColor = null;
					document.getElementById("slot4").style.backgroundColor = null;
					document.getElementById("slot5").style.backgroundColor = null;
					document.getElementById("slot7").style.backgroundColor = null;
					document.getElementById("slot8").style.backgroundColor = null;
				}

				else if ((slot1 == slot5 && slot5 == slot9) ||
					(slot1 == slot5 && slot9 == "a7") ||
					(slot1 == slot9 && slot5 == "a7") ||
					(slot5 == slot9 && slot1 == "a7")) {
					document.getElementById("slot1").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot5").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot9").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;

					document.getElementById("slot2").style.backgroundColor = null;
					document.getElementById("slot3").style.backgroundColor = null;
					document.getElementById("slot4").style.backgroundColor = null;
					document.getElementById("slot6").style.backgroundColor = null;
					document.getElementById("slot7").style.backgroundColor = null;
					document.getElementById("slot8").style.backgroundColor = null;
				}

				else if ((slot3 == slot5 && slot5 == slot7) ||
					(slot3 == slot5 && slot7 == "a7") ||
					(slot3 == slot7 && slot5 == "a7") ||
					(slot5 == slot7 && slot3 == "a7")) {

					document.getElementById("slot3").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot5").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;
					document.getElementById("slot7").style.backgroundColor = `rgb(${50}, ${170}, ${90})`;

					document.getElementById("slot1").style.backgroundColor = null;
					document.getElementById("slot2").style.backgroundColor = null;
					document.getElementById("slot4").style.backgroundColor = null;
					document.getElementById("slot6").style.backgroundColor = null;
					document.getElementById("slot8").style.backgroundColor = null;
					document.getElementById("slot9").style.backgroundColor = null;
				}

			}
			else {
				clearColors();
			}
			counter++;

		}
		else {
			clearColors();
			return null;
		}
	}
	var swap = window.setInterval(func, interval);

}


function clearColors() {
	document.getElementById("slot1").style.backgroundColor = null;
	document.getElementById("slot2").style.backgroundColor = null;
	document.getElementById("slot3").style.backgroundColor = null;
	document.getElementById("slot4").style.backgroundColor = null;
	document.getElementById("slot5").style.backgroundColor = null;
	document.getElementById("slot6").style.backgroundColor = null;
	document.getElementById("slot7").style.backgroundColor = null;
	document.getElementById("slot8").style.backgroundColor = null;
	document.getElementById("slot9").style.backgroundColor = null;
}