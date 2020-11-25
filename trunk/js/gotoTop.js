// 返回顶部功能实现
$(function() {
    // 把函数拦截在window上暴露出去
    window.gotoTop = function(options) {
        // 默认参数
        var defaults = {
                bottom: '100px'
            }
            // 参数合并
        var parms = $.extend({}, defaults, options)
            // 准备结构
        var $gotoTopHtml = $(`<div class="backToTop">
                    <img src = "${parms.imgUrl}" alt = "" >
                      </div>`);
        // 书写样式
        $gotoTopHtml.css({
            width: '38px',
            height: '50px',
            position: 'fixed',
            bottom: parms.bottom,
            left: '610px',
            marginLeft: '50%',
            display: 'none',
        });

        // 返回顶部的js代码
        // 返回顶部
        // 推动事件
        $(document).scroll(function() {
                //获取距离顶部的位置
                var topDistance = $('html, body').scrollTop();
                //    判断
                if (topDistance > 500) {
                    $('.backToTop').show();
                } else {
                    $('.backToTop').hide();
                }
            })
            // 返回顶部(动态添加的元素 需要使用事件委托 才能绑定事件)
        $('body').on('click', '.backToTop', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 300)
        })

        // 追加到页面的尾部
        $('body').append($gotoTopHtml)
    }

})