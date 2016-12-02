$(document).ready(function () {
    var panelCover = $('.panel-cover'),
        navWrapper = $('.navigation-wrapper'),
        mainPostList = $('.main-post-list'),
        wrapper = $('.content-wrapper');

    if (window.location.hash === '#blog') {
        toBlog();
    }
    if (window.location.hash === '#') {
        toHome();
    }

    function toHome() {
        console.log(window.location.hash)
        console.log('toHome')

        panelCover.removeClass('panel-cover--collapsed');
        wrapper.addClass('hidden');
        wrapper.removeClass('animated slideInRight');

    }

    function toBlog() {
        console.log('toBlog')
        console.log(window.location.hash)
        panelCover.addClass('panel-cover--collapsed');
        wrapper.removeClass('hidden');
        wrapper.addClass('animated slideInRight');

    }

    $('#J_toblog').click(function () {
        if (window.location.hash !== "#blog") {
            toBlog();
        }
    });
    $('#J_tohome').click(function () {
        if (window.location.hash === "#blog") {
            toHome();
        }
    });

    if (window.location.pathname.substring(0, 5) == "/tag/") {
        panelCover.addClass('panel-cover--collapsed');
    }

    $('.btn-mobile-menu__icon').click(function () {
        if (navWrapper.css('display') == "block") {
            navWrapper.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                navWrapper.toggleClass('visible animated bounceOutUp');
            });
            navWrapper.toggleClass('animated bounceInDown animated bounceOutUp');

        } else {
            navWrapper.toggleClass('visible animated bounceInDown');
        }
        $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });

    $('.navigation-wrapper .blog-button').click(function () {
        // if (navWrapper.css('display') == "block") {
        //     navWrapper.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        //         navWrapper.toggleClass('visible animated bounceOutUp');
        //     });

        //     navWrapper.toggleClass('animated bounceInDown ','animated bounceOutUp');
        // }
        // navWrapper.toggleClass('animated bounceInDown ','animated bounceOutUp');


        $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });
});
$(document.links).filter(function () {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
