// (function () {

// })();

// event pada saat link di klik
$('.page-scroll').on('click', function(e){
    // Ambil isi href | Kalo this diganti .page-scroll nanti yang keambil 4 4 nya
    const Href = $(this).attr('href'); 

    // Nangkep elemen ybs
    const elementHref = $(Href);

    // console.log(elementHref.offset().top);
    // $('body').scrollTop(elementHref.offset().top);

    $('body').animate({
        scrollTop : elementHref.offset().top - 50
    }, 1250, 'easeInOut');

    e.preventDefault();
});

// Parallex
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});
$(window).scroll(function(){
    var winScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ winScroll/2 +'%)'
    })
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ winScroll/1.3 +'%)'
    })
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ winScroll/.635 +'%)'
    })

    // Portoflio
    if( winScroll > 800 ){
        $('.portofolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portofolio .thumbnail').eq(i).addClass('muncul')
            }, 300 * (i+1));
        });
    };
});