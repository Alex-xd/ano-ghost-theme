$(document).ready(function () {
    var panelCover = $('.panel-cover'),
        $mainPost = $('.J_main-post-list'),
        wrapper = $('.content-wrapper');

    // 首页动画
    for (var i = 0, $slideIn = $('.slideIn'), len = $slideIn.length; i < len; i++) {
        (function (_i) {
            setTimeout(function () {
                $slideIn.eq(_i).addClass('up');
            }, i * 500);
        })(i);
    }

    // 判断所在页面 （主页/博客）
    if (window.location.hash === '#blog') {
        toBlog();
    }
    if (window.location.hash === '#') {
        toHome();
    }

    // 绑定切换页面事件
    $('#J_toblog').click(function () {
        if (window.location.hash !== "#blog") {
            toBlog();
        }
    });
    $('#J_tohome').click(function () {
        if (window.location.hash !== "#") {
            toHome();
        }
    });
    $('#J_menuicon').on('click', function () {
        if (window.location.hash !== "#") {
            toHome();
        }
    });

    // 抽象动作
    function toBlog() {
        $('.menuicon').attr('style', '');
        panelCover.addClass('panel-cover--collapsed');
        $mainPost.removeClass('hidden');
        wrapper.addClass('animated slideInRight');
    }
    function toHome() {
        $('.menuicon').attr('style', 'display:none !important;');
        panelCover.removeClass('panel-cover--collapsed');
        $mainPost.addClass('hidden');
        wrapper.removeClass('animated slideInRight');
    }
});

$(document.links).filter(function () {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
