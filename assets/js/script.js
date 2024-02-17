$(document).ready(function(){
    $('.game_slider').owlCarousel({
        loop:true,
        center:true,
        margin:-24,
        nav:true,
        navText: ["&#8672;", "&#8674;"],
        dots:false,
        responsive:{
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:7
            }
        }
    })
})
$(window).on('load', function(){
    if(typeof AOS !== 'undefined'){
        AOS.init({
            easing: 'ease',
            duration: 1000,
            once:false
        });
    }
});
