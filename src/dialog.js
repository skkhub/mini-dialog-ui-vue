/**
 * @file 弹窗组件
 */

import Vue from 'vue';
import Main from './dialog.vue';

let MessageConstructor = Vue.extend(Main);

let instance;

/**
 * dialog函数
 *
 * @param {Object} options
 * options.title
 * options.message
 * options.showCancel
 * options.sureText
 * options.cancelText
 * @return {Object} vm
 */
export default function (options = {}) {
    const defaultOptions = {
        title: '提示',
        message: '', // 字符串或字符串数组，当是数组时，可以多行显示
        showCancel: false,
        sure: null,
        cancel: null,
        sureText: '确定',
        cancelText: '取消',
        visible: true
    };
    if (typeof options === 'string' || options instanceof Array) {
        options = {
            message: options
        };
    }
    options = Object.assign({}, defaultOptions, options);

    const sure = options.sure || (() => {});
    const cancel = options.cancel || (() => {});

    return new Promise((resolve, reject) => {

        options.sure = () => {
            sure();
            resolve();
        };
        options.cancel = () => {
            cancel();
            reject();
        };
        if (instance) {
            Object.assign(instance.$data, options);
        }
        else {
            instance = new MessageConstructor({
                data: options
            });
            instance.$mount();
            document.body.appendChild(instance.$el);
        }
        instance.visible = true;
    });
}
