window.onload = function () {
    document.querySelector('.load').classList.add('_un_active');
}
// Меню
const iconMenu = document.querySelector('.header__burger');
const signBody = document.querySelector('.navbar__buttons');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        signBody.classList.toggle('_active');
    });
}

const menuLinks = document.querySelectorAll('.navigator_system[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

//слайдер jq
// const owl = $('.owl-carousel');
// owl.owlCarousel({
//     margin: 30,
//     items: 3
//     // responsive: {
//     //     680: {
//     //         items: 2
//     //     },
//     //     893: {
//     //         items: 3
//     //     }
//     // }
// });

// $('.button_prev').click(function() {
//     owl.trigger('prev.owl.carousel', [300]);
// })


// $(window).on('load', function() {
//     $(".owl-carousel").owlCarousel({
//         center: true,
//         loop: true,
//         startPosition: 1,
//         margin: 30,
//         dots: false,
//         autoWidth: true,
//     });
// });


// $('.prev').click(function() {
//     $('.owl-carousel').trigger('prev.owl.carousel');
// })

// $('.next').click(function() {
//     $('.owl-carousel').trigger('next.owl.carousel');
// })

new Swiper('.slider_block', {
    observer: true,
    loop: true,
    observeParents: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 800,
    watchOverflow: false,
    autoplay: true,
    preLoadImage: true,
    grabCursor: true,

    navigation: {
        nextEl: '.slider_block_btns .next.swiper-button-next',
        prevEl: '.slider_block_btns .prev.swiper-button-prev'
    }
});