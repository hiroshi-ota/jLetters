(function($){
    var jLetters = function(element, options){
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

        this.getParams = function(){
            return params;
        }
        //main animate function
        var Animate = function(elem){
            var string = elem.text();
            $('body').append(params.before + string + params.after);
        }
        Animate(elem);
    }

    $.fn.jLetters = function(options) {
        return this.each(function(){
           var element = $(this);
           //Return early if element has a instance of jLetters
           if(element.data('jLetters')) return;
           var api = new jLetters(this, options);
           //Store plugin object in this element's data
           element.data('jLetters', api);
       });

    }

    // $.fn.jLetters = function() {
    //     var args = {},
    //         text;
    //     /*INITIALISATION*
    //         - initialise jLetters
    //         - set args & text
    //         @args: list of arguments passed by user
    //         @text: optional text (string) passed by user
    //     */
    //     (function(arguments){
    //         if(typeof arguments[0] !== 'object'){
    //             text = arguments[0];
    //             arguments = Array.prototype.slice.call(arguments, 1);
    //         }
    //         args = arguments[0];
    //     }(arguments))
    //
    //     function Animate(elem){
    //         var string = elem.text();
    //         $('body').append(args.before + string + args.after);
    //     }
    //     Animate($(this));
    //
    // }
    //
    // //Exception control:
    // function ExceptionLog(message){
    //     this.name = 'jLetters Error';
    //     this.message = message;
    // }
    // ExceptionLog.prototype = Error.prototype;

}(jQuery))
