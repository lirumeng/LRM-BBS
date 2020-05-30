import { extend, localize } from 'vee-validate'

import {
    required,
    email,
    min,
    length,
    confirmed,
    max,
    is_not
} from 'vee-validate/dist/rules'

import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('required', required)
extend('email', email)
extend('min', min)
extend('length', length)
extend('confirmed', confirmed)
extend('max', max)
extend('is_not', is_not)

// 自定义校验
extend('nickname', {
    validate: (value) => {
        return !/^\d+/.test(value)
    },
    message: '昵称不能以数字开头'
})

extend('email', {
    ...email,
    message: '请输入正确的邮箱格式'
})

extend('password', {
    validate: (value) => {
        return value.length >= 6
    },
    message: '不符合最小长度要求'
})

extend('repassword', {
    params: ['target'],
    validate(value, { target }) {
        return value === target
    },
    message: '两次输入密码不一致'
})

extend('code', {
    validate: (value) => {
        return value.length === 4
    },
    message: '请输入4位验证码'
})

localize('zh_CN', {
    // 使用扩展运算符，扩展中文包
    messages: {
        ...zh.messages,
        required: '请输入{_field_}'
    },
    // 与validation-provider中的name对应
    // key为name, value为对应的中文field名称
    names: {
        email: '邮箱',
        password: '密码',
        repassword: '确认密码',
        oldpassword: '旧密码',
        nickname: '昵称',
        username: '用户名',
        code: '验证码',
        title: '标题',
        catelog: '分类'
    },
    fields: {
        // catelog: {
        //     is_not: '请选择{_field_}'
        // }
        // email: {
        //     email: '请输入正确的{_field_}',
        //     required: '请输入{_field_}'
        // },
        // name: {
        //     min: (field, { length }) => {
        //         return `请在${field}输入至少${length}个字符`
        //     }
        // },
        // password: {
        //     confirmed: (field, { target }) => {
        //         return `两次输入的${field}不一致！`
        //     }
        // }
    }
})