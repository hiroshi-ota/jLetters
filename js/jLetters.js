(function($) {
	var jLetters = function(element, options) {
		/*INITIALISATION*
		//         - initialise jLetters
		//         - set params & element
		//         @element: element on which jLetters is working
		//         @options: list of settings passed by user
		//     */
		var elem = $(element),
			obj = this,
			params = $.extend({
				animationDuration: 500
			}, options || {});

		//main animate function
		var Animate = function(elem) {
			var string = elem.text();
			$(elem).text('');
			var text = '';
			for (var i = 0; i < string.length; i++) {
				(function(i) {
					setTimeout(
						function() {
							text += string.charAt(i);
							$(elem).text(text);
						}, params.animationDuration + (params.animationDuration * i))
				}(i))
			}
		}
		Animate(elem);
	}

	$.fn.jLetters = function(options) {
		return this.each(function() {
			var element = $(this);
			//Return early if element has a instance of jLetters
			if (element.data('jLetters')) return;
			var api = new jLetters(this, options);
			//Store plugin object in this element's data
			element.data('jLetters', api);
		});

	}

	//Exception control:
	function ExceptionLog(message) {
		this.name = 'jLetters Error';
		this.message = message;
	}
	ExceptionLog.prototype = Error.prototype;

}(jQuery))
