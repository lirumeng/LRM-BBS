import { Validator } from 'vee-validate';

// 自定义验证规则
Validator.extend('password', {
    validate: value => {
        return value.length >= 6;
    }
});
Validator.extend('code', {
    validate: value => {
        return value.length === 4;
    }
});

const dictionary = {
    'zh-CN': {
        messages: {
            required: field => '请输入' + field,
            password: () => '不符合最小长度要求',
            email: () => '请输入正确的邮箱格式',
            code: () => '请输入4位验证码'
        },
        attributes: {
            email: '邮箱',
            password: '密码',
            username: '账号',
            code: '验证码'
        }
    }
};

Validator.localize(dictionary);