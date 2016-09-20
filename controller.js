var APP = APP || {};

APP.controller = (function (View, Mole, Player, $) {
	// "use strict"

	var init = function () {
		createAllMoles(8);
		View.drawMoles(Mole.getMoles());
		clickListener();
		var MyInterval = setInterval(function () {
			resetBoard();
			randomMoleLightUp();
		}, 1000);
	};

	var randomInterval = function () {
		return Math.random() * 2000 + 500;
	};

	var resetBoard = function () {
		Mole.allUnlightUp();
		var moles = Mole.getMoles();
		for (var i = 0; i < moles.length; i++) {
			var $mole = $('#' + moles[i].moleID);
			View.changeMoleGreen($mole);
		}
	};

	// TODO: why delegation does not work here?
	var clickListener = function () {
		$(".mole").on("click", function (event) {
			$mole = $(event.target);
			var id = $mole.attr("id");
			var mole = Mole.findByID(parseInt(id));
			if (mole.lighted === true) {
				Player.addScore();
				mole.unLightUp();
				View.changeMoleGreen($mole);
			};
			View.showScore(Player.getScore());
		});
	};

	var createAllMoles = function (num) {
		for (var i = 0; i < num; i++) {
			Mole.createMole();
		};
	};

	var randomMoleLightUp = function () {
		var mole = Mole.randomMole();
		mole.lightUp();
		var $mole = $('#' + mole.moleID);
		View.changeMoleRed($mole);
	};

	return {
		init: init,
	};
})(APP.view, APP.mole, APP.player, $);

$(document).ready(function () {
	APP.controller.init();
});
