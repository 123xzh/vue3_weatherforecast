<!--
 * @Author: hsl-lmx
 * @Date: 2020-11-18 09:15:39
 * @LastEditTime: 2022-10-12 22:19:10
 * @LastEditors: 黄展秀 2241695276@qq.com
 * @Description: 下雪组件
 * @FilePath: \anmation\snowflake.vue
-->
<style scoped>
.snowflake {
    width: 100%;
    /* margin: 0 auto; */
    height: 1000px;
    /* background: #133d7c; */
    position: relative;
    /* overflow: hidden; */
}

</style>
<template>

    <div id="snowflake" class="snowflake">
    </div>

</template>

<script>
export default {
    name: 'snowflake',
    data() {
        return {
            // 容器
            snowflakeModal: '',
            // 容器宽度
            modalWidth: '',
            // 容器高度
            modalHeight: '',
            // 定时器
            interval: null,
            // 雪球基础半径
            baseRadius: 20,
            // 生成雪球比例
            baseScale: .5,
            // 雪球下降的基础速度 px/s
            baseDownSpeed: 80,
            // 雪球下降的X轴基础偏移量
            baseDownXOffset: 200
        };
    },
    methods: {
        // 确定容器基础信息
        initSnowflakeBaseInfo() {
            // 容器
            this.snowflakeModal = document.getElementById('snowflake')
            // 容器宽度
            this.modalWidth = this.snowflakeModal.clientWidth;
            // 容器高度
            this.modalHeight = this.snowflakeModal.clientHeight;
            console.log(this.modalHeight)
        },

        // 循环下雪~
        loopInitSnowflake() {
            this.initSnowflake();
            this.interval = setInterval(() => {
                this.initSnowflake();
            }, 2000)
        },

        // 生成一组随机雪球
        initSnowflake() {
            // 雪球个数（随机） 容器宽度/雪球基础半径*随机数
            let randomNum = Math.random()
            randomNum = randomNum == 0 ? 0.5 : randomNum > 0.5 ? randomNum : randomNum + 0.5
            let snowflakeNum = randomNum * parseInt(this.modalWidth / this.baseRadius) * this.baseScale;
            // 生成雪球
            for (let index = 0; index < snowflakeNum; index++) {
                // 创建雪球
                let snowflake = document.createElement('i');
                // 设置雪球基础属性
                snowflake.style.borderRadius = '50%';
                snowflake.style.backgroundColor = '#ffffff';
                snowflake.style.position = 'absolute';
                snowflake.style.top = `-${this.baseRadius*2}px`;
                // 设置雪球大小(随机)
                let baseSize = Math.random();
                snowflake.style.width = baseSize * this.baseRadius + 'px';
                snowflake.style.height = baseSize * this.baseRadius + 'px';
                // 设置雪球透明度
                snowflake.style.opacity = Math.random();
                // 雪球出现的位置(X轴,随机)
                snowflake.style.left = Math.random() * this.modalWidth + 'px';
                this.snowflakeModal.appendChild(snowflake)

                // 雪球开始下降动画
                // 确定雪球下降速度（随机 0.5 - 1）
                let randomSpeed = Math.random()
                randomSpeed = randomSpeed == 0 ? 0.3 : randomSpeed > 0.3 ? randomSpeed : randomSpeed + 0.3
                let snowflakeSpeed = randomSpeed * this.baseDownSpeed
                // 确定雪球下降方向偏移量（随机+正负）
                let snowflakeOffset = (Math.round(Math.random()) * 2 - 1) * Math.random() * this.baseDownXOffset
                // 确定雪球下降时间（根据速度确定 - S秒）
                let snowflakeTime = parseInt(this.modalHeight / snowflakeSpeed)

                // 开启3d动画（硬件加速）
                snowflake.style.transformStyle = 'preserve-3d';
                // 设置动画
                snowflake.style.transition = `all ${snowflakeTime}s linear`;
                setTimeout(() => {
                    snowflake.style.transform = `translateX(${snowflakeOffset}px) translateY(${this.modalHeight + this.baseRadius * 2}px) translateZ(0)`
                    setTimeout(() => {
                        snowflake.remove();
                    }, snowflakeTime * 1000)
                }, 100)
            }
        },
    },
    created() {},
    mounted() {
        this.initSnowflakeBaseInfo();
        this.loopInitSnowflake();
    },
    beforeDestroy() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }
};
</script>
