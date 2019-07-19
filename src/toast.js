/**
 * @file toast组件
 */

import Vue from 'vue';
import Main from './toast.vue';

let MessageConstructor = Vue.extend(Main);

let instance;

/**
 * toast函数
 *
 * @param {Object} options
 * options.message
 * options.duration 持续时间后自动消失，单位毫秒
 * @return {Object} vm
 */
export default function (options = {}) {
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
}
