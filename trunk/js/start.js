// 封装星级评分函数

$(function() {
    // 写一个创建星星评分的函数 挂在windows上
    window.createStart = function(score) {
        // $.fn.createStart = function(score) {     //扩展插件
        // 满星
        var on = `<sapn class="on iconfont icon-xingxing"></sapn>`;
        // 半星
        var half = ` <sapn class="half iconfont icon-star-half"></sapn>`;
        // 灰色星
        var off = `<sapn class="off iconfont icon-xingxing"></sapn>`;
        // 样式
        // $(on).css({
        //         fontSize: '50px',
        //         color: 'gold'
        //     }),
        //     $(half).css({
        //         fontSize: '42px',
        //         color: 'gold'
        //     }),
        //     $(off).css({
        //         fontSize: '50px',
        //         color: '#ccc'
        //     })
        // 计算分数
        var calScore = Math.floor(score * 2) / 2;
        console.log(calScore);
        // 计算整数
        var onCount = Math.floor(calScore);
        // 计算半星
        var isHasHalf = 0;
        if (calScore % 1 !== 0) {
            isHasHalf = 1;
        }
        // 计算灰色的星
        var offCount = 5 - onCount - isHasHalf;
        // 拼接结果
        var rst = '';
        // 拼接满星
        for (var i = 0; i < onCount; i++) {
            rst += on;
        }
        // 拼接半星
        if (isHasHalf === 1) {
            rst += half;
        }
        // 拼接灰色星
        console.log(rst)
        for (var k = 0; k < offCount; k++) {
            rst += off;
        }
        // 返回
        return rst;
        // $(this).html(rst);
    }
})