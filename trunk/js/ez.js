//  产品详情加护列表
$(function() {
    // 首页大图录播
    $(".ez-banner").tyslide({
        boxh: 500, //盒子的高度
        w: 1200, //盒子的宽度
        h: 440, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 20, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 15, //控制按钮宽度
        controlsH: 15, //控制按钮高度
        radius: 14, //控制按钮圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色

    });


    // 轮播切换
    // 后面两个默认隐藏
    $('.ez-banner:gt(0)').hide();
    // 给table绑定事件
    $('.ez-title ul li').on('mouseenter', function() {
        // 导航切换效果
        $(this).addClass('active').siblings('li').removeClass('active')
            // 获取索引
        var index = $(this).index();

        // 获取内容
        $('.ez-banner').eq(index).show().siblings().hide()
    })
})