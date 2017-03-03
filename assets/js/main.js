$(document).ready(function () {
    var $panelCover = $('.panel-cover'),
        $mainPost = $('.J_main-post-list'),
        $wrapper = $('.content-wrapper'),
        $menuicon = $('#menuicon'),
        $beian = $('#J_beian');

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
    if (window.location.pathname.length <= 1 && (window.location.hash === '#' || window.location.hash === '')) {
        toHome();
    }

    // 绑定切换页面事件
    $('#J_toblog').click(function () {
        if (window.location.hash !== "#blog") {
            toBlog();
        }
    });
    // $('#J_tohome').click(function () {
    //     if (window.location.hash !== "#") {
    //         toHome();
    //     }
    // });
    // $('#J_menuicon').on('click', function () {
    //     if (window.location.hash !== "#") {
    //         toHome();
    //     }
    // });

    // 抽象动作
    function toBlog() {
        $menuicon.removeClass('hidden');
        $panelCover.addClass('panel-cover--collapsed');
        $mainPost.removeClass('hidden');
        $beian.addClass('hidden');
    }

    function toHome() {
        $menuicon.addClass('hidden');
        $panelCover.removeClass('panel-cover--collapsed');
        $mainPost.addClass('hidden');
        $beian.removeClass('hidden');
    }

    console.log('%c @ Alex-xd - 张博元      https://i.alexxd.com', 'padding-left:32px;line-height:32px;font-family:"Helvetica Neue",Helvetica,Arial,"Microsoft YaHei",sans-serif;color:#666;font-size:14px;');
});

$(document.links).filter(function () {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
