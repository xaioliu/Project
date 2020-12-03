// 购物车交互
// 定义三个变量
// 1.全选
// 1点击表头的全选框,获取去表头全选框的选中状态
// 2表格中的单选项状态要一值
// 3结算中的全选要一样

$(function() {
    // 定义三个变量
    var $theadInput = $('table thead input[type=checkbox]'); //头部选择框
    var $bodyInput = $('table tbody input[type=checkbox]'); //中间选择框
    var $allPriceInput = $('.totalPrice input[type=checkbox]'); //结算选择框

    $theadInput.change(function() {
        // 获取选中状态
        var state = $(this).prop('checked');
        // 让表格中,结算中的选择框状态保持一致
        $bodyInput.prop('checked', state);
        $allPriceInput.prop('checked', state);
        // 调用计算总价函数
        calcTotalPrice();
    })


    // 结算中的选择框也需要相同的功能
    $allPriceInput.change(function() {
        // 获取选中状态
        var state = $(this).prop('checked');
        // 上面的全选和表格中的input状态需要一致
        $bodyInput.prop('checked', state);
        $theadInput.prop('checked', state);
        // 调用计算总价函数
        calcTotalPrice();

    })



    $bodyInput.change(function() {
        // 循环表格中所有选择框的选中状态
        var flag = true;
        // 总价
        $bodyInput.each(function(i, input) {
                if (!$(input).prop('checked')) { // 只要有一个没有选中就变为false
                    flag = false;
                }
            })
            // 把状态用来改变全选框、
        $theadInput.prop('checked', flag);
        $allPriceInput.prop('checked', flag);

        // 调用计算总价函数
        calcTotalPrice();
    })



    // 数量的加减
    // 增加
    $('.add').on('click', function() {
        // 下一个input节点
        var $nextInput = $(this).next();
        // 获取输入框的值
        var oldvalue = parseInt($nextInput.val());
        // 自增
        oldvalue++;
        // 重新赋值给输入框
        $nextInput.val(oldvalue);
        // 小计
        subtotalPrice(oldvalue, $(this));
        // 调用计算总价函数
        calcTotalPrice();

    })



    // 减少
    $('.reduce').on('click', function() {
        // 上一个
        var $prevInput = $(this).prev();
        // 获取输入框的值
        var oldvalue = parseInt($prevInput.val());
        // 自减
        oldvalue--;
        // 如果小于1那就等于1，否则等于自己
        oldvalue = oldvalue < 1 ? 1 : oldvalue;
        // 重新赋值给输入框
        $prevInput.val(oldvalue);
        // 小计
        subtotalPrice(oldvalue, $(this));
        // 调用计算总价函数
        calcTotalPrice();

    })



    // 抽取小计的函数
    function subtotalPrice(val, dom) {
        var subtotal = val * parseFloat($(dom).closest('tr').find('.price').text()).toFixed(2);
        //    把小计放入对应的位置
        dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));



    }



    // 删除
    $('.del').click(function() {
        // 删除这行
        $(this).closest('tr').remove();
        // 调用商品总数量
        calcGoodsCount();
    })



    // 计算总价和选中的函数
    function calcTotalPrice() {
        // 定一个数量
        var count = 0;
        // 定义变量保存总价
        var totalPrice = 0;
        // 循环表格中的所有选择框，如果是选中状态就计算总价
        $('table tbody input[type=checkbox]').each(function(i, input) {
            if ($(input).prop('checked')) {
                // 数量自增
                count++;
                // 价格相加
                totalPrice += parseFloat($(this).closest('tr').find('.subprice').text())
            }
        })

        // 把总价渲染到对应的位置
        $('.nums').text(totalPrice.toFixed(2));
        // 把数量渲染到对应位置
        $('.count').text(count);
    }

    // 全部商品
    function calcGoodsCount() {
        $('.goodscount').text($('table tbody tr').length);
    }
    // 进入界面就自动调用一次
    calcGoodsCount();


    // 删除选中商品
    $('.deleteChecked').on('click', function() {
        // 循环单选框 如果选中 删除
        $bodyInput.each(function(i, input) {
                if ($(this).prop('checked')) {
                    $(this).closest('tr').remove();
                }
            })
            // 计算总价
        calcTotalPrice();
        // 计算数量
        calcGoodsCount();
    })
})