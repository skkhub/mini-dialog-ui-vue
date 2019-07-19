# mini-dialog-ui-vue

## 精简的vueUI组件集

## 目前包含的组件
- 弹窗(dialog)
- 加载提示窗(loading)
- 提示弹窗(toast)

## 使用
1.安装
    `npm install mini-dialog-ui-vue`

2.通常的使用方法

    ```
        import dialog from 'mini-dialog-ui-vue';
        Vue.use(dialog);

        // 在实例中使用
        this.$dialog('我是提示');

        // 或者传入详细参数项
        this.$dialog({
            title: '弹窗标题',
            message: '字符串或字符串数组，当是数组时，可以多行显示',
            showCancel: false, // 是否显示取消按钮
            sure: null, // 确认按钮的回调函数
            cancel: null, // 取消按钮的回调函数
            sureText: '确定',
            cancelText: '取消'
        });

        this.$loading('正在加载...');

        this.$toast('toast提示，默认1.5s后消失')；
        
    ```
3.单独使用其中一个组件

    ```
        import {loading} from 'mini-dialog-ui-vue';

        loading('loading...');
    ```