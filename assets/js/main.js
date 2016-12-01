$(document).ready(function () {
    var panelCover = $('.panel-cover'),
        navWrapper = $('.navigation-wrapper');

    $('a.blog-button').click(function () {
        // If already in blog, return early without animate overlay panel again.
        if (location.hash && location.hash == "#blog") return;
        if (panelCover.hasClass('panel-cover--collapsed')) return;
        $('.main-post-list').removeClass('hidden');
        currentWidth = panelCover.width();
        if (currentWidth < 960) {
            panelCover.addClass('panel-cover--collapsed');
            $('.content-wrapper').addClass('animated slideInRight');
        } else {
            panelCover.css('max-width', currentWidth);
            panelCover.animate({ 'max-width': '700px', 'width': '28%' }, 400, swing = 'swing', function () {});
        }
    });

    $('a.blog-button.homepage').click(function(){
         // If already in blog, return early without animate overlay panel again.
        if (location.hash && location.hash != "#blog") return;
        if (!panelCover.hasClass('panel-cover--collapsed')) return;
        $('.main-post-list').addClass('hidden');
        currentWidth = panelCover.width();
        if (currentWidth < 960) {
            panelCover.removeClass('panel-cover--collapsed');
            $('.content-wrapper').removeClass('animated slideInRight');
        } else {
            panelCover.css('max-width', currentWidth);
            panelCover.animate({ 'max-width': 'none', 'width': '100%' }, 400, swing = 'swing', function () {});
        }
    });

    if (window.location.hash && window.location.hash == "#blog") {
        panelCover.addClass('panel-cover--collapsed');
        $('.main-post-list').removeClass('hidden');
    }

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
        if (navWrapper.css('display') == "block") {
            navWrapper.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                navWrapper.toggleClass('visible animated bounceOutUp');
            });

            navWrapper.toggleClass('animated bounceInDown animated bounceOutUp');
        }

        $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });
});
$(document.links).filter(function () {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
