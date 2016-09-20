var APP = APP || {};

APP.player = (function () {
	"use strict"
	var _score = 0;

	var stub = {};

	stub.getScore = function () {
		return _score;
	};

	stub.addScore = function () {
		_score += 1;
	};



	return stub;
})();
