module('Configuration', {
	setup: function() {
		someText = 'some text';
		div = document.createElement('div');
		div.class = 'myClass';
		div.innerHTML = 'some text in div';
	}
});

test('initialisation', function() {
	equal(typeof $.fn.jLetters, 'function', 'jLetters is a part of jQuery');
	equal(typeof $(div).jLetters().data('jLetters'), 'object', 'api is there');
	$(div).jLetters();
})
