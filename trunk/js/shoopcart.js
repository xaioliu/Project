// 购物车交互
// 定义三个变量
var $theadInput = $('table thead input[type=checkbox]'); //头部选择框
var $bodyInput = $('table tbody input[type=checkbox]'); //中间选择框
var $allPriceInput = $('.totalPrice input[type=checkbox]'); //结算选择框
$(function() {
    // 1.全选
    // 1点击表头的全选框,获取去表头全选框的选中状态
    // 2表格中的单选项状态要一值
    // 3结算中的全选要一样
    $theadInput.change(function() {
            // 获取选中状态
            var state = $(this).prop('checked');
            // 让表格中,结算中的选择框状态保持一致
            $bodyInput.prop('checked', state);
            $allPriceInput.prop('checked', state);
        })
        // 结算中的选择框也需要相同的功能
    $allPriceInput.change(function() {
            // 获取选中状态
            var state = $(this).prop('checked');
            // 上面的全选和表格中的input状态需要一致
            $bodyInput.prop('checked', state);
            $theadInput.prop('checked', state);
        })
        // 表单中的选中状态影响全选状态

    $bodyInput.change(function() {
        // 循环表格中所有选择框的选中状态
        var flag = true;
        $bodyInput.each(function(i, input) {
                if (!$(input).prop('checked')) { // 只要有一个没有选中就变为false
                    flag = false;
                }
            })
            // 把状态用来改变全选框、
        $theadInput.prop('checked', flag);
        $allPriceInput.prop('checked', flag);
    })
})