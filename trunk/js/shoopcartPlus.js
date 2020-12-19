// 购物车功能强化
$(function() {
    // 把三个类型的input先获取
    var $theadInput = $("thead input[type = checkbox]"); //表头全选
    var $tbodyInputs = $("tbody input[type = checkbox]"); //表格中的选择框
    var $totalPriceInput = $(".totalPrice input[type = checkbox]"); //计算总价的全选框


    // 全选
    // 1.给表头中的全选绑定点击事件，当点击的时候获取到他的选中状态(true/false)
    // 2.给表格中的一行数据的input选择框，赋值为表头选中状态(ture/false)
    // 3.给计算总价中的全选框，也赋值为表头的选中状态(true/false)

    // 表头的全选
    $theadInput.change(function() {
        var checkState = $(this).prop('checked'); //获取全选框的选中状态，
        $tbodyInputs.prop('checked', checkState); //把状态给表格中的选择框
        $totalPriceInput.prop('checked', checkState); //把状态给计算总价总的全选框

        allTotal(); //总计
    });

    // 计算总价的全选
    // 1.给计算总价的全选按钮绑定点击事件，获取选择状态(true/false)
    // 2.把状态给表头的全选
    // 3.把状态给表格中的选择框
    $totalPriceInput.change(function() {
        var checkState = $(this).prop('checked'); //获取计算总价全选的选中状态
        $theadInput.prop('checked', checkState); //赋值给表头的全选
        $tbodyInputs.prop('checked', checkState); //赋值给表格的全选
        allTotal(); //总计
    })

    // 让表格中的选择框，反选全选选择框
    // 1.给表格中的选择框绑定点击事件
    // 2.定一个标杆 flag = true
    // 3.循环表格中的选择框
    // 4.获取每一个选择框的选中状态
    // 判断：如果一个是false，那么就不是全选。 flag =false
    // 5.把flag当值赋值给两个全选框，因为flag就是对应选中状态
    $tbodyInputs.change(function() { //给表格中单选框绑定事件
        var flag = true;
        $tbodyInputs.each(function(index, input) { //循环表格input
            // 获取每一个选中状态
            var checkState = $(this).prop('checked'); // 获取选中状态
            if (!checkState) { // 如果有一个等于false
                flag = false; //标杆就变为false等于全选
            }
        })
        $theadInput.prop('checked', flag); //把状态赋值给全选正泰
        $totalPriceInput.prop('checked', flag); //把状态赋值给计算价格
        allTotal(); //总计
    })

    // 加法功能
    // 1.获取加按钮，绑定点击事件，
    // 2.点击的时候获取输入框的值
    // 3.输入框的值自增
    // 4.把自增后的值，重新赋值给后面的输入框
    $(".add").click(function() { //增加绑定事件
        var count = parseInt($(this).next().val()); //获取输入框的值
        count++; //自增
        $(this).next().val(count); //赋值给输入框

        // 小计
        subTotal($(this), count);
        allTotal(); //总计
    })

    // 减法功能
    // 1.获取减按钮，绑定点击事件，
    // 2.点击的时候获取输入框的值
    // 3.输入框的值自减,边界判断不能小于1，小于1等于1，否则等于自己
    // 4.把自减后的值，重新赋值给后面的输入框
    $(".reduce").click(function() { //减少绑定事件
        var count = parseInt($(this).prev().val()); //获取输入框的值
        count--; //自增
        count = count < 1 ? 1 : count;
        $(this).prev().val(count); //赋值给输入框

        // 小计
        subTotal($(this), count);
        allTotal(); //总计
    })

    // 封装一个小计函数(点击加减的时候，需要调用小计功能)
    function subTotal(dom, count) {
        // 找到单价
        var singlePrice = parseFloat(dom.closest('tr').find('.price').text());

        var subTotalPrice = singlePrice * count; //单击乘以数量等一小计
        dom.closest('tr').find('.subprice').text(subTotalPrice.toFixed(2)); //把小计的结果渲染对应的位置，保留两位小数
    }

    // 总计功能实现(头部全选，尾部全选 表格的选择框 加 减 删除 六个地方调用总计)
    // 1.获取所有表格选中状态，循环，获取选中状态，判断
    // 定义一个变量用于保存总价 定义一个变量 用于保存已选商品 数量
    // 2.如果选中，那么就要累加这一行的小计
    function allTotal() {
        var allPrice = 0; //保存总价
        var selectedCount = 0; //保存数量

        $("tbody input[type = checkbox]").each(function() { //获取表格中的选择框 循环
                var checkState = $(this).prop('checked'); //获取选中状态
                if (checkState) { // 如果是true
                    allPrice += parseFloat($(this).closest('tr').find('.subprice').text()); //累加这一行
                    selectedCount++; //数量+1
                }
            })
            // 渲染
        $('.total').text(allPrice.toFixed(2)); //渲染总价
        $('.count').text(selectedCount); //渲染数量
    }

    // 关于删除，删除只是一个伪事件，真正的删除要在数据库进行
    // 删除
    $('.del').click(function() {
        $(this).closest('tr').remove();
        getGoodsCount(); //重新计算商品
        allTotal(); //计算总价格
    })

    // 删除选中
    $('.deleteChecked').click(function() {
        $('tbody input[type=checkbox]').each(function() { //获取表格中的选择框 循环
            var checkState = $(this).prop('checked'); //获取选中状态
            if (checkState) { //如果是ture
                $(this).closest('tr').remove(); //删掉自己
            }
        })
        getGoodsCount(); //重新计算总价
        allTotal(); //计算总价格
    })

    // 封装一个获取全部商品的函数
    function getGoodsCount() {
        // 获取数量
        var goodsCount = $('table tbody tr').length;
        // 渲染
        $('.goodscount').text(goodsCount);
    }

    getGoodsCount(); //页面加载调一次
})