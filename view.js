var APP = APP || {};

APP.view = (function () {
	"use strict"

	var stub = {};

	var drawOneMole = function (mole) {
		var $mole = $("<div></div>").addClass("mole")
			.css("background-color", "green")
			.attr("id", mole.moleID);
		$('main').append($mole);
	};

	stub.drawMoles = function (moles) {
		for (var i = 0; i < moles.length; i++) {
			drawOneMole(moles[i]);
		};
	};

	stub.changeMoleRed = function ($mole) {
		$mole.css("background-color", "red");
	};

	stub.changeMoleGreen = function ($mole) {
		$mole.css("background-color", "green");
	};

	stub.showScore = function (score) {
		$('.score').html("Score: " + score);
	};

	stub.init = function () {

	};

	return stub;
})();
