$('.project-images').magnificPopup({
    delegate: 'a',
    type: 'image'
});

$('.test-popup-link').magnificPopup({
    type: 'image'
});

let wow = new WOW({
    boxClass:     'wow',
    animateClass: 'animate__animated',
    offset:       200,
    mobile:       true,
    live:         true
})

wow.init();

let sliderSelector = '.swiper-container',
    options = {
        init: false,
        loop: true,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides : true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 60,
            modifier: 1,
            slideShadows : true,
        },
        grabCursor: true,
        parallax: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1000: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 2,
                spaceBetween: -80
            }
        }
    };
let mySwiper = new Swiper(sliderSelector, options);
mySwiper.init();

$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

let scroll = $('.scroll');
let form = $('.form')

scroll.click(function () {
    form[0].scrollIntoView({behavior: 'smooth'});
});

let menuTechnologies = $('.menu-technologies');
let menuProjects = $('.menu-projects');
let menuProduction = $('.menu-production');
let menuGuarantees = $('.menu-guarantees');
let menuReviews = $('.menu-reviews');

menuTechnologies.click(function () {
    $('.building-technology')[0].scrollIntoView({behavior: 'smooth'});
});
menuProjects.click(function () {
    $('.projects')[0].scrollIntoView({behavior: 'smooth'});
});
menuProduction.click(function () {
    $('.steps')[0].scrollIntoView({behavior: 'smooth'});
});
menuGuarantees.click(function () {
    $('.guarantees')[0].scrollIntoView({behavior: 'smooth'});
});
menuReviews.click(function () {
    $('.slider')[0].scrollIntoView({behavior: 'smooth'});
});

let burger = $('.burger');
let close = $('.close')

burger.click(function () {
    $('.menu').show();
    $('.menu-bg').show();
    close.show();
})

close.click(function () {
    $('.menu').hide();
    $('.menu-bg').hide();
    $('.close').hide();
})

let viewMore = $('.view-more');

viewMore.click(function () {
    $('.project-hidden').css('display', 'grid');
    viewMore.hide();
})

let submit = $("#submit");
let phoneInput = $(".input-phone");

submit.click(function () {
    let name = $(".input-name");
    let hasError = false;

    $('.input-error-name').hide();
    $('.input-error-phone').hide();

    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red');
        hasError = true;
    } else {
        name.css('border-color', 'white');
    }

    if (!phoneInput.val()) {
        phoneInput.next().show();
        phoneInput.css('border-color', 'red').css('margin-top', '20px').css('margin-bottom', '5px');
        hasError = true;
    } else {
        phoneInput.css('border-color', 'white').css('margin-bottom', '20px').css('margin-top', '20px');
    }

    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {name: name.val(), phone: phoneInput.val()}
        })
            .done(function (msg) {
                if (msg.success) {
                    $('.text').hide();
                    $('.show-text').show();
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                    name.val('');
                    phoneInput.val('');
                }
            });
    }
});

let submitPopup = $(".submit-popup");
let popupBtn = $('#popup-btn');
let popup = $('.popup');
let phonePopup = $(".phone-popup");

popupBtn.click(function () {
    popup.show();
});

$('.popup-close').click(function () {
    popup.hide();
});

submitPopup.click(function () {
    let name = $(".name-popup");
    let hasError = false;

    $('.popup-error-name').hide();
    $('.popup-error-phone').hide();

    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red');
        hasError = true;
    } else {
        name.css('border-color', 'white');
    }

    if (!phonePopup.val()) {
        phonePopup.next().show();
        phonePopup.css('border-color', 'red').css('margin-top', '20px').css('margin-bottom', '5px');
        hasError = true;
    } else {
        phonePopup.css('border-color', 'white').css('margin-bottom', '20px').css('margin-top', '20px');
    }

    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {name: name.val(), phone: phonePopup.val()}
        })
            .done(function (msg) {
                if (msg.success) {
                    $('.popup-form').hide();
                    $('.show-text-popup').show();
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                    name.val('');
                    phonePopup.val('');
                }
            });
    }
});

$(function(){
    phoneInput.mask("8(999) 999-9999");
    phonePopup.mask("8(999) 999-9999");
});

let arrowsOne = $('.arrows-one');
let arrowsTwo = $('.arrows-two');
let arrowsThree = $('.arrows-three');
let arrowsFour = $('.arrows-four');
let arrowsFive = $('.arrows-five');
let technologyShowFirst = $('.technology-show-first')
let technologyShowSecond = $('.technology-show-second')
let technologyShowThree = $('.technology-show-third')
let technologyShowFourth = $('.technology-show-fourth')
let technologyShowFifth = $('.technology-show-fifth')
let technologyShow = $('.technology-show')

arrowsOne.click(function (){
    technologyShow.hide()
    technologyShowFirst.show()
})
arrowsTwo.click(function (){
    technologyShow.hide()
    technologyShowSecond.show()
})
arrowsThree.click(function (){
    technologyShow.hide()
    technologyShowThree.show()
})
arrowsFour.click(function (){
    technologyShow.hide()
    technologyShowFourth.show()
})
arrowsFive.click(function (){
    technologyShow.hide()
    technologyShowFifth.show()
})
