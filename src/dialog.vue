<template>
    <div class="layer" v-show="visible">
        <div class="container">
            <h3 class="title">{{ title }}</h3>
            <div class="content" v-if="!multiply">
                {{ message }}
            </div>
            <div class="content" v-else>
                <p v-for="m in message">{{ m }}</p>
            </div>
            <div class="btn-group">
                <button type="button" @click="onCancel" v-if="showCancel">{{ cancelText }}</button>
                <button type="button" :class="{'width-100': !showCancel}" @click="onSure">{{ sureText }}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'm-dialog',
    data() {
        return {
            title: '提示',
            message: '', // 字符串或字符串数组，当是数组时，可以多行显示
            showCancel: false,
            sure: null,
            cancel: null,
            sureText: '确定',
            cancelText: '取消',
            visible: true
        };
    },
    computed: {
        multiply() {
            return this.message instanceof Array;
        }
    },
    methods: {
        onSure() {
            if (this.sure && typeof this.sure === 'function') {
                this.sure();
            }

            this.visible = false;
        },
        onCancel() {
            if (this.cancel && typeof this.cancel === 'function') {
                this.cancel();
            }

            this.visible = false;
        }
    }
};
</script>
<style scoped src="./reset.css">
</style>
<style scoped>
.layer {
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
}
.container {
    position: fixed;
    top: 50%;
    left: 50%;
    overflow: hidden;
    width: 80%;
    min-width: 200px;
    max-width: 320px;
    font-size: 16px;
    border-radius: 13px;
    background-color: #fff;
    transition: .2s;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    -webkit-user-select: none;
    backface-visibility: hidden;
}
.container .title {
    width: 100%;
    height: 60px;
    font-size: 18px;
    line-height: 60px;
    text-align: center;
    color: #000;
}
.container .content {
    overflow: auto;
    min-height: 50px;
    max-height: 60vh;
    padding: 0 20px 20px;
    font-size: 15px;
    line-height: 1.4;
    text-align: center;
}
.container .btn-group {
    width: 100%;
    height: 44px;
    border-top: 1px solid #e7e7e7;
}
.container .btn-group button {
    float: left;
    width: 50%;
    height: 100%;
    border: none;
    font-size: 15px;
    text-align: center;
    background: transparent;

    -webkit-appearance: none;
}
.container .btn-group button:last-child {
    border-left: 1px solid #e7e7e7;
    color: #3b76ff;
}
.container .btn-group button.width-100 {
    width: 100%;
    border-left: none;
}
.container .btn-group button:active {
    background-color: #e7e7e7;
}
</style>
