$(function () {
        // 사이트 맵
        // 사이트 맵 켜기
        $("header .gnb-open-btn").click(function () {
            $('.gnb').addClass('on');
        });
        // 사이트 맵 끄기
        $(".gnb-close-btn").click(function () {
            $('.gnb').removeClass('on');
        })
});
