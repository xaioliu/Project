/*
*乐购商城首页js
2020-10-27
*/
// 当页面加载完毕
$(function() {
    // 首页大图录播
    $("#banner").tyslide({
        boxh: 430, //盒子的高度
        w: 983, //盒子的宽度
        h: 400, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 14, //控制按钮圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });
    // 图书电子书小轮播
    $("#ebooks-banner").tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 15, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色

    });
    // 电子书table切换
    // 新书了表手风琴效果
    $('.ebooks .right-box ul >li').mouseenter(function() {
        // 所有兄弟，隐藏详情 显示标题
        $(this).siblings().find('.desc').hide();
        $(this).siblings().find('.ebooks-title').show();

        // 当前：隐藏标题，显示详情
        $(this).find('ebooks-title').hide();
        $(this).find('.desc').show();
    });
    // 服装小轮播
    $("#clothes-banner").tyslide({
        boxh: 341, //盒子的高度
        w: 427, //盒子的宽度
        h: 341, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 15, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色

    });
    //户外运动小轮播
    $("#sport-banner").tyslide({
        boxh: 341, //盒子的高度
        w: 427, //盒子的宽度
        h: 341, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 15, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色

    });
    // 儿童装小轮播
    $("#child-sport-banner").tyslide({
        boxh: 341, //盒子的高度
        w: 427, //盒子的宽度
        h: 341, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 15, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色

    });
    // 推广商品交互
    $('.promotion .promotion-title ul li').mouseenter(function() {
        //导航激活类切换
        $(this).addClass('active').siblings().removeClass('active');
        //内容切换
        // 获取对应索引
        var index = $(this).index();
        console.log(index); // 0 => left:0, 1 => left:-1 * -1170
        // 左右移动
        $('.promotion .promotion-content .inner-box').animate({
            'left': -index * 1170
        })
    });
    // 返回顶部
    // 绑定滚动事件
    $(document).scroll(function() {
            //获取距离顶部的位置
            var topDistance = $('html, body').scrollTop();
            if (topDistance > 500) {
                $('.backToTop').show();
            } else {
                $('.backToTop').hide();
            }
        })
        // 返回顶部
    $('.backToTop').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 300)
        })
        // 二维码划出效果
    $('.qr-code .ticket').hover(function() {
            // 放出二维码
            $('.qr-code div').stop(true).animate({
                left: '-100px'
            })
        }, function() {
            // 收起二维码
            $('.qr-code div').stop(true).animate({
                left: '0px'
            })
        })
        // 给顶部搜索框绑定一个事件
    $(document).scroll(function() {
            // 获取到顶部的距离
            var topDistance = $('html, body').scrollTop();
            if (topDistance > 500) {
                // 滚动距离
                $('.top-search-box').slideDown(300);
            } else {
                $('.top-search-box').slideUp(300);
            }
        })
        // 楼层跳转
    $('.floor li').click(function() {
        // 获取索引
        var index = $(this).index();
        // 选中每一个板块到顶部的便宜
        var topOffset = $('.floorBox').eq(index).offset().top;
        // 让滚动条滚到相应位置
        $('html, body').animate({
                scrollTop: topOffset - 50
            })
            // console.log(topOffset)  测试是否可以跳转
    })
})