<template>
    <div class="layer" v-show="visible">
        <div class="container">
            {{ message }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'm-toast',
    data() {
        return {
            type: 'message', // 'loading'则是加载状态
            message: '',
            visible: false,
            duration: 1500
        };
    },
    watch: {
        visible(val) {
            if (val) {
                setTimeout(() => {
                    this.visible = false;
                }, this.duration);
            }

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
}
.container {
    position: fixed;
    top: 50%;
    left: 50%;
    overflow: hidden;
    min-width: 60px;
    max-width: 220px;
    padding: 10px;
    font-size: 15px;
    line-height: 1.4;
    text-align: center;
    color: #fff;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .7);
    transition: .2s;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    -webkit-user-select: none;
    backface-visibility: hidden;
}
</style>
