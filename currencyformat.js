(function($) {
    // MAIN FUNCTION
    $.fn.currencyFormat = function (options) {

        //Create Options
        var defaults = {
            bindHandler: true,
        };

        var options = $.extend(defaults, options);

        return this.each(function () {

            var obj = $(this); //Get the element(here input textbox)
            var bindHandler = options.bindHandler;



            function neglect_string(e) {

                setTimeout(function() {
                    if(e.target.value=='NaN'){
                        obj.val('');
                    }
                    }, 0); //here 'zero' is the starting execution time of the setTimeout function

                    e.target.value = e.target.value.replace(/[^0-9\.]/g,''); //Neglect

                number_places(e.target.value)//parse the value to next function
            }
            
            function number_places(number) {

                var str = number.split('.');//divide the 'number' from the dot

                str[0] = (parseInt(str[0])).toLocaleString(); //toLocaleString() function add the comma to 1000 number places
                var formatedNumber = str.join('.');

                obj.val(formatedNumber);//Set textbox value
            }





    if (bindHandler) { //at first come to here and if bindHandler true, this will execute

        $(this).on('paste keyup', function(e) { //events

              neglect_string(e);
                });
                    }
        });
    }

})(jQuery);

