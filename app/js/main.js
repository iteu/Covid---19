$('.stats-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<img src="./img/left.png" alt="">',
    nextArrow: '<img src="./img/right.png" alt="">',
});


$('.navbar__link1').click(function(){
    $('html, body').animate({scrollTop:$('#corona').position().top}, 1500);
});

$('.navbar__link2').click(function(){
    $('html, body').animate({scrollTop:$('#contagion').position().top}, 1300);
});

$('.navbar__link3').click(function(){
    $('html, body').animate({scrollTop:$('#symp').position().top}, 1100);
});

$('.navbar__link4').click(function(){
    $('html, body').animate({scrollTop:$('#do').position().top}, 900);
});

$('.navbar__link5').click(function(){
    $('html, body').animate({scrollTop:$('#footer').position().top}, 900);
});


$('.header-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('header-btn-active');
    $('.header-burger__menu').toggleClass('header-burger__menu_active');
});