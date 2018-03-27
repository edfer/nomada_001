var $ = require('jquery');

$('.board-item').on('click ', function() {

    var viewWidth = $(window).width();

    if (viewWidth <= 738) {
        $(this).find('.img').toggleClass('desaturate');
        $(this).find('.hidden').toggleClass('description');
    } else if (viewWidth <= 1027) {
        $(this).find('.img').toggleClass('desaturate');
        $(this).find('.hidden').toggleClass('description');
    }



});

$('.board-item').on('mouseover mouseout', function() {
    $(this).find('.img').toggleClass('hover-color');
});