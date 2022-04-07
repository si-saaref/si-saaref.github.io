const menu = document.getElementsByClassName('menu-bar')[0];
const navlink = document.querySelector('.header-link ul');
menu.addEventListener('click', function () {
	menu.classList.toggle('menu-click');
	navlink.classList.toggle('slide');
});

$(window).ready(function () {
	setTimeout(() => {
		$('.jumbodesc h3 span').each(function (i) {
			setTimeout(function () {
				$('.jumbodesc h3 span').eq(i).addClass('muncul');
			}, 300 * (i + 1));
		});
	}, 500);
});

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
	const deg = Math.round(e.clientY / 20 + e.clientX / 20) - 94;
	const degY = Math.round(e.clientY / 20);
	const degX = Math.round(e.clientX / 20);
	const sumDeg = deg + degX - degY;
	console.log(deg, degX, degY);
	h1Drag.style.transform = 'rotate(' + sumDeg + 'deg)';
	// h1Drag.style.transform = 'rotate3d('+degX+','+degY+','+deg+'deg)'
});

// const pageClick = document.querySelectorAll('.page-click');
// pageClick.forEach(function (el) {
//     el.addEventListener('click', function () {
//         console.log(el);
//     })
// })

$(window).scroll(function () {
	const winScroll = $(this).scrollTop();
	// console.log(winScroll);
	arr = [300, 400, 500, 600, 700];
	for (let i = 0; i < arr.length; i++) {
		if (winScroll >= arr[i]) {
			$('#aboutPhoto').attr('src', 'img/stickman' + (i + 1) + '.png');
		}
	}
	// if(winScroll>400){
	//     $('#aboutPhoto').attr('src', 'img/stickman2.png')
	// }
});

$(window).scroll(function () {
	const winScroll = $(this).scrollTop();
	if (winScroll >= 200) {
		$('span#dropHeader').addClass('dropHeader');
		// $('nav').css({'color' : 'rgb(111, 107, 107)'})
		// $('.header-link a').css({'color' : 'rgb(111, 107, 107)'})
	} else {
		$('span#dropHeader').removeClass('dropHeader');
		// $('nav').css({ color: 'floralwhite' });
		// $('.header-link a').css({ color: 'floralwhite' });
	}
});

// ?https://stackoverflow.com/questions/1854556/check-if-inputs-are-empty-using-jquery

// ?https://stackoverflow.com/questions/19291873/window-width-not-the-same-as-media-query
$(document).ready(function () {
	$('.inputForm').on('input', function () {
		if ($(this).val().length === 0) {
			if (window.matchMedia('(max-width: 768px').matches) {
				$(this).siblings('label').css('top', '-15%');
				$(this).siblings('#messageLabel').css('top', '-2%');
			} else {
				$(this).siblings('label').css('top', '0');
			}
			console.log($('.inputForm').siblings('label'));
			console.log($('.inputForm').value);
		} else {
			if (window.matchMedia('(max-width: 768px').matches) {
				$(this).siblings().css('top', '-60%');
			} else {
				$(this).siblings().css('top', '-50%');
			}
			$(this).siblings('#messageLabel').css('top', '-30%');
		}
	});
});

// window.addEventListener('scroll', function (e) {
//     const winScroll = e.scrollTop();
//     if(winScroll>100) {
//         const dropHeader = document.querySelector('span#dropHeader');
//         dropHeader.classList.toggle('dropHeader')
//     }
// })
