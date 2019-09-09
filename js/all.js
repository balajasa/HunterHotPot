$(document).ready(function() {

    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
        $('.scroll-top').fadeIn();
    } else {
    $('.scroll-top').fadeOut();
    }
    });
    $('.scroll-top').click(function() {
    $('html, body').animate({scrollTop: '0'}, 600);
    return false
    });
  
    $('.toggle').on('click', function(e) {
    $(this).toggleClass("open");
        e.preventDefault();
    $('body').toggleClass('menu-show');
    });
  
  
    // $('.love').hover(function(){
    // $(this).find('i').attr('class','far fa-heart');
    // },function(){
    // $(this).find('i').attr('class','fas fa-heart');
    // });



});


