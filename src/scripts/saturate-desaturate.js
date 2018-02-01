var $ = require('jquery');

$('.board-item').on('click', function(){
    $(this).find('.img').toggleClass('desaturate');
    $(this).find('.hidden').toggleClass('description'); 
});