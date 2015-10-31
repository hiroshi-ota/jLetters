module('Configuration');

test('initialisation', function () {
    equal(typeof $.fn.jLetters, 'function', 'jLetters is a part of jQuery');
    equal(typeof $(this).jLetters().data('jLetters'), 'object', 'api is there');
})

module('jLetters: Errors');
