var TestModule = function () {
	var stub = {};

	var publicValue = "I am public";
	var _hiddenValue = "I am private";
	var _hiddenMethod = function () {
		console.log("Hello world");
	};

	stub.onePublicMethod = function () {
		_hiddenMethod();
		return _hiddenValue;
	};

	stub.getPublic = function () {
		return publicValue;
	};

	stub.setPublic = function (value) {
		publicValue = value;
	};

	return stub;
};

var test = TestModule();
