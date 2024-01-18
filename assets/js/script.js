var swiper = new Swiper(".game_slider", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 50,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 5
        },
        1200: {
            slidesPerView: 5.5
        }
    },
});
$(window).on('load', function(){
    if(typeof AOS !== 'undefined'){
        AOS.init({
            easing: 'ease',
            duration: 1000,
            once:false
        });
    }
});
