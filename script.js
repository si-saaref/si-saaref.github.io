const menu = document.getElementsByClassName('menu-bar')[0];
const navlink = document.querySelector('.header-link ul')
menu.addEventListener('click', function () {
    menu.classList.toggle('menu-click')
    navlink.classList.toggle('slide')
})



$(window).on('load', function () {
    $('.jumbodesc h3 span').each(function (i) {
        setTimeout(function () {
            $('.jumbodesc h3 span').eq(i).addClass('muncul')
        }, 200 * (i+1))
    })
})



// const nameJumbo = document.querySelectorAll('.jumbodesc h3 span');
// nameJumbo.forEach(function (elem) {
//     window.addEventListener('load', function () {
//         setTimeout(function () {
//             elem.classList.add('muncul')
//             elem.eq
//         }, 900)
//     })
// })



const h1Drag = document.querySelector('.jumbologo h1');
h1Drag.addEventListener('mousemove', function (e) {
    // const deg = Math.round(((e.clientX/20)))
    const deg = Math.round(((e.clientY/20)+(e.clientX/20)))-64
    const degY = Math.round(((e.clientY/20)))
    const degX = Math.round((e.clientX/20))
    console.log(deg);
    h1Drag.style.transform = 'rotate('+deg+'deg)'
    // h1Drag.style.transform = 'rotate3d('+degX+','+degY+','+deg+'deg)'
})



// const pageClick = document.querySelectorAll('.page-click');
// pageClick.forEach(function (el) {
//     el.addEventListener('click', function () {
//         console.log(el);
//     })
// })



$(window).scroll(function () {
    const winScroll = $(this).scrollTop();
    console.log(winScroll);
    arr = [300, 400, 500, 600, 700];
    for(let i = 0; i<arr.length; i++){
        if(winScroll >= arr[i]) {
            $('#aboutPhoto').attr('src', 'img/stickman'+(i+1)+'.png')
        }
    }
    // if(winScroll>400){
    //     $('#aboutPhoto').attr('src', 'img/stickman2.png')
    // }
})

$(window).scroll(function () {
    const winScroll = $(this).scrollTop();
    if(winScroll >= 200) {
        $('span#dropHeader').addClass('dropHeader');
        // $('nav').css({'color' : 'rgb(111, 107, 107)'})
        // $('.header-link a').css({'color' : 'rgb(111, 107, 107)'})
    } else {
        $('span#dropHeader').removeClass('dropHeader');
        $('nav').css({'color' : 'floralwhite'})
        $('.header-link a').css({'color' : 'floralwhite'})
    }
})

// window.addEventListener('scroll', function (e) {
//     const winScroll = e.scrollTop();
//     if(winScroll>100) {
//         const dropHeader = document.querySelector('span#dropHeader');
//         dropHeader.classList.toggle('dropHeader')
//     }
// })