<!--
 * @Description: 
 * @Author: zhanxiu
 * @Date: 2022-09-10 20:15:22
 * @LastEditTime: 2022-10-12 16:00:56
 * @LastEditors: 黄展秀 2241695276@qq.com
-->
<template>
<!-- <div id="rainback"> -->
  <div class="home">
    <canvas id="canvas" />
    <!-- 换成自己的图片 -->
    <!-- <img :style="canvasStyle" src="@/assets/img/中雨.jpg" /> -->
  </div>
<!-- </div> -->
</template>

<script>
import { init } from "./rain.js";

export default {
  name: "Home",
  data() {
    return {
      canvasStyle: {
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        left: "0",
        bottom: "0",
      },
      ctx: {},
    };
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      const canvas = document.querySelector("#canvas");
      this.ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(this.ctx);
    },
  },
};
</script>

<style lang="scss" scoped>
//   #rainback {
//   background-color: #3e5477;
//   background-image: url("@/assets/img/小雨.jpg");
//   background-repeat: no-repeat;
//   background-attachment: scroll;
//   background-size: contain;
//   background-size: 100% 100%;
//   height: 100%;
//   position: fixed;
//   width: 100%;
//   text-align: center;
// }

</style>