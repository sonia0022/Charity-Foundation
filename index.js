const swiper1 = new Swiper('.swiper', {
    // Optional parameters
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


// slider-02
$('.owl-carousel1').owlCarousel({
    // rtl:true,
    lt1:true,
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    smartSpeed: 900,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        900: {
            items: 3,
            nav: false
        },
        1100: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})

// section-04
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 12,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
    }
})

// section-06
var swiper3 = new Swiper(".swiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
