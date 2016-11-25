$(document).ready(function(){

    var arr = ['cat', 'tiger', 'monkey', 'fox'];
    $('.imgBlock').css('background-image', 'url(img/'+arr[0]+'.jpg)');

    for( var i = 0; i < arr.length; i++ ){
        $('.btns').append( '<div class="dot" data-img="' + arr[i] + '"></div>' );
    };
    
    $('.dot').click(function() {
        var currentImg = $(this).attr('data-img');
        $('.dot').removeClass('active');
        $(this).addClass('active');
        $('.imgBlock').css('background-image', 'url(img/' + currentImg + '.jpg)');
    });
    
});