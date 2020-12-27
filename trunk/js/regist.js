// 这是注册沫模块
$(function() {
    // 调用验证插件
    $('#registerForm').validate({
        // 验证规则
        rules: {
            // 用户名的验证
            username: {
                required: true, //非空
                rangelength: [3, 6] //长度限制
            },
            // 密码验证
            password: {
                required: true, //非空
                isPassword: true //自定义验证
            },
            //确认密码验证
            checkPassword: {
                required: true, //非空
                equalTo: "#password" //验证密码的一致性
            },
            // 电话号码验证
            tel: {
                required: true, //非空
                isTel: true //自定义验证
            }
        },
        // 提示信息
        messages: {
            // 用户名信息提示
            username: {
                required: '用户名不能为空', //非空提示
                rangelength: '长度在3到6个字符之间' //长度提示
            },
            // 密码信息提示
            password: {
                required: '密码不能为空',
            },
            // 确认密码信息提示
            checkPassword: {
                required: '请再次输入密码',
                equalTo: '两次密码不一致' //密码一致性的验证
            },
            // 电话号码提示信息
            tel: {
                required: '电话号码不能为空',
                isTel: '电话号码格式不正确'
            }
        }
    });




    // 密码自定义验证
    jQuery.validator.addMethod("isPassword", function(value, element) {
        var pwdReg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
        return this.optional(element) || (pwdReg.test(value));
    }, "请输入5-10个以字母开头，可带数字，下划线");
    // 手机号自定义验证
    jQuery.validator.addMethod("isTel", function(value, element) {
        var telReg = /^[1]+[3,8,5,7]+\d{9}$/;
        return this.optional(element) || (telReg.test(value));
    }, "请输入5-10个以字母开头，可带数字，下划线");
})