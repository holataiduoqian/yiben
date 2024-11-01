'use strict';

$(document).ready(function () {

    $('#name, #mobile').on('input', function (e) {
        checkField();
        var label = $(this).prev('label');
        e.target.value.length > 0 ? label.addClass('active') : label.removeClass('active');
    });

    $('.option').on('change', 'input', function (e) {
        checkField();
        $('.option').find('label').css({
            color: '#ADADAD'
        });
        $(this).parent().css({
            color: '#28A4FF'
        });
    });

    function checkField() {
        var fields = {};
        var flag = false;
        $('.form').serializeArray().forEach(function (item) {
            fields[item.name] = item.value;
        });
        if (typeof fields.option !== 'undefined') {
            Object.keys(fields).forEach(function (key) {
				if ( (typeof fields[key] === 'undefined' || !fields[key].length) && key!='created_at' && key!='ip'  ) {
                    flag = true;
                }
            });
        } else {
            flag = true;
        }
        flag ? $('#submitBtn').attr('disabled', 'disabled') : $('#submitBtn').attr('disabled', null);
    }
});
