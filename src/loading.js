/**
 * @file loading组件
 */

import Vue from 'vue';
import Main from './loading.vue';

let MessageConstructor = Vue.extend(Main);

let instance;

/**
 * loading函数
 *
 * @param {Object} options
 * options.message
 * @return {Object} vm
 */
const loading = function (options = {}) {
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }

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

    return instance;
};
loading.hide = function () {
    instance.visible = false;
};

export default loading;
