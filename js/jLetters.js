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
			text = $(elem).text();
			params = $.extend({
				animationDuration: 500
			}, options || {});

		//Auxiliary functions
		var splitWords = function (){
			var words = [];
			words.push(text.split(' '));
			return words[0];
		}

		var splitChars = function (word){
			var char = [];
			if(typeof word !== 'string'){
				word = text;
			}
			char.push(word.split(''));
			return char[0];
		}

		var toSpan = function (array){
			var plain = '';
			for(var elem in array){
				plain += '<span>' + array[elem] + '</span> ';
			}
			return plain;
		}

		//Main animate function
		var animate = function() {
			$(elem).text('');
			for (var i = 0; i < text.length; i++) {
				(function(i) {
					setTimeout(
						function() {
							var char = text.charAt(i);
							$(elem).append(char).animate({
								opacity: 1
							}, 1000);
						}, params.animationDuration + (params.animationDuration * i))
				}(i))
			}
		}
		animate(elem);
		toSpan(splitWords());
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
	function ExceptionLog(message){
	    this.name = 'jLetters Error';
	    this.message = message;
	}
	ExceptionLog.prototype = Error.prototype;

}(jQuery))
