var APP = APP || {};

APP.mole = (function () {
	"use strict"

	var stub = {};
	var _moles = [];
	var _id = 1;

	// API module interface
	stub.createMole = function () {
		var newMole = new MoleConstructor();
		_moles.push(newMole);
	};

	stub.getMoles = function () {
		return _moles;
	};

	stub.findByID = function (id) {
		for (var i = 0; i < _moles.length; i++) {
			if (_moles[i].moleID === id) {
				return _moles[i];
			};
		};
	};

	stub.randomMole = function () {
		return _moles[Math.floor(Math.random() * _moles.length)];
	};

	stub.allUnlightUp = function () {
		for (var i = 0; i < _moles.length; i++) {
			_moles[i].unLightUp();
		};
	};

	// mole constructors and functions
	var MoleConstructor = function () {
		this.lighted = false;
		this.moleID = _id;
		_id += 1;
	};

	MoleConstructor.prototype.lightUp = function () {
		this.lighted = true;
	};

	MoleConstructor.prototype.unLightUp = function () {
		this.lighted = false;
	};

	return stub;
})();;
