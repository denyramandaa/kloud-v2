/*global $,Swiper, navigator*/
(function () {
$(document).ready(function() {
    let swiperFilters;
    let swiperTabs;
    let swiperRooms;
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    function initSwiperJumbotron(){
        let swiper = new Swiper('.swiper--jumbotron', {
            effect: 'slide',
            centeredSlides: true,
            loop: true,
            watchOverflow: true,
            slidesPerView: 1.2,
            spaceBetween: 0,
            navigation: {
                nextEl: '.jumbotron--next',
                prevEl: '.jumbotron--prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1.1,
                    centeredSlides: false,
                }
            }
        });
    }
    function initSwiperFilters(){
        swiperFilters = new Swiper('.swiper--filters', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: false,
            noSwiping: true,
            speed: 600
        });
    }
    function initSwiperTabFilters(){
        swiperTabs = new Swiper('.swiper--tabFilters', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: false,
            noSwiping: true,
            speed: 600,
            navigation: {
                nextEl: '.tab-filters--next',
                prevEl: '.tab-filters--prev',
            },
        });
        
        swiperTabs.on('slideChange', function () {
            swiperFilters.slideTo(swiperTabs.activeIndex)
            $('.filter-menu').removeClass('active')
        });
    }
    function initSwiperWhyUs(){
        let swiper = new Swiper('.swiper--whyus', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 4,
            spaceBetween: 40,
            speed: 600,
            navigation: {
                nextEl: '.whyus--next',
                prevEl: '.whyus--prev',
            },
            pagination: {
                el: ".whyus--pagination",
                clickable: true
            },
            breakpoints: {
                800: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 1
                }
            }
        });
    }
    function initSwiperRooms(){
        swiperRooms = new Swiper('.swiper--rooms', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 600,
            navigation: {
                nextEl: '.rooms--next',
                prevEl: '.rooms--prev',
            },
            breakpoints: {
                600: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                }
            }
        });
    }
    function initSwiperTestimonials(){
        let swiper = new Swiper('.swiper--testimonials', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 3,
            spaceBetween: 20,
            speed: 600,
            pagination: {
                el: ".testimonials--pagination",
                clickable: true
            },
            breakpoints: {
                800: {
                    slidesPerView: 2.2
                },
                600: {
                    slidesPerView: 1.1
                }
            }
        });
    }
    function initSwiperPartnership(){
        let swiper = new Swiper('.swiper--partnership', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 5,
            spaceBetween: 60,
            speed: 600,
            breakpoints: {
                800: {
                    slidesPerView: 3.5
                },
                600: {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                }
            },
            navigation: {
                nextEl: '.partnership--next',
                prevEl: '.partnership--prev',
            }
        });
    }
    function initSwiperBlogs(){
        let swiper = new Swiper('.swiper--blogs', {
            effect: 'slide',
            watchOverflow: true,
            slidesPerView: 3,
            spaceBetween: 20,
            speed: 600,
            breakpoints: {
                800: {
                    slidesPerView: 2.2
                },
                600: {
                    slidesPerView: 1.2
                }
            }
        });
    }
    let sidebarStatus = false
    $('.burger-button').click(() => {
        const icon = sidebarStatus ? 'burger-icon.png' : 'close-icon.png'
        $('.burger-button').attr('src', 'assets/images/icons/'+icon)
        sidebarStatus ? $('.sidebar').removeClass('show') : $('.sidebar').addClass('show');

        sidebarStatus=!sidebarStatus
    })
    // dev 2 Start
    $('#startDateM').datepicker({
      uiLibrary: 'bootstrap4'
    })
    $('#endDateM').datepicker({
      uiLibrary: 'bootstrap4'
    })
    $('#startDate').datepicker({
      uiLibrary: 'bootstrap4'
    })
    $('#endDate').datepicker({
      uiLibrary: 'bootstrap4'
    })
    // dev 2 End
    $('#dateFFO').datepicker({
        uiLibrary: 'bootstrap4'
    })
    $('#dateMRE').datepicker({
        uiLibrary: 'bootstrap4'
    })
    $('#dateStayHD').datepicker({
        uiLibrary: 'bootstrap4'
    })
    $('#dateStayVO').datepicker({
        uiLibrary: 'bootstrap4'
    })
    $('.filter-menu').each(function(idx) {
        $(this).click(() => {
            $('.filter-menu').removeClass('active')
            $(this).addClass('active')
            swiperFilters.slideTo(idx)
        })
    })
    $('.swiper--rooms .swiper-slide').each(function(idx) {
        $(this).click(() => {
            swiperRooms.slideTo(idx)
        })
    });
    $('.youtube-click').each(function(idx) {
        $(this).click(() => {
            $('.youtube-pop-up').show()
            $('.iframe-youtube').attr('src', $(this).find('.youtube-thumb').data('video'))
        })
    });
    $('.close-youtube').click(() => {
        $('.youtube-pop-up').hide()
        $('.iframe-youtube').attr('src', '')
    })
    $('.youtube-pop-up-overlay').click(() => {
        $('.youtube-pop-up').hide()
        $('.iframe-youtube').attr('src', '')
    })
    $('.description-btn').click(()=> {
        $('.review-btn').removeClass('underline-grey font-weight-bold').addClass('text-grey-100')
        $('.description-btn').addClass('underline-grey font-weight-bold').removeClass('text-grey-100')
        $('.review-wrapper').css('display', 'none')
        $('.description-wrapper').css('display', 'flex')
    })
    $('.review-btn').click(()=> {
        $('.description-btn').removeClass('underline-grey font-weight-bold').addClass('text-grey-100')
        $('.review-btn').addClass('underline-grey font-weight-bold').removeClass('text-grey-100')
        $('.description-wrapper').css('display', 'none')
        $('.review-wrapper').css('display', 'flex')
    })
    $('.jumbotron--slick').slick({
        dots: false,
        mobileFirst:true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 760,
            settings: {
              centerMode: true
            }
        }]
    });
    initSwiperRooms();
    initSwiperJumbotron();
    initSwiperFilters();
    initSwiperWhyUs()
    initSwiperTestimonials()
    initSwiperPartnership()
    initSwiperBlogs()
    initSwiperTabFilters()
    if(isMobile) {
        
    }
});
}(jQuery));