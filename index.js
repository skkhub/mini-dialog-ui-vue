/**
 * @file 主文件
 * @author sunkeke
 */

import dialog from './src/dialog.js';
import loading from './src/loading.js';
import toast from './src/toast.js';

export default {
    install(Vue) {
        Vue.prototype.$dialog = dialog;
        Vue.prototype.$loading = loading;
        Vue.prototype.$toast = toast;
    },
    dialog,
    loading,
    toast
};

export {dialog, loading, toast};
