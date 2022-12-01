<template>
<div id="wrap-texture">

    <div id="canvas"></div>

    <div class="plane">
        <img data-sampler="dispImage" id="texture" src="@/static/img/中雨.jpg" crossorigin="anonymous"/>
    </div>
</div>
</template>

<script>
import './rain.js'
import 'https://www.curtainsjs.com/build/curtains.min.js'
  export default {
    
  }
</script>

<style lang="scss" scoped>
body {
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0;
    overflow: hidden;
}

#wrap-texture {
    position: relative;
}

#canvas {
    /* canvas 的大小 */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.plane {
    /* 限制 plane 的大小 */
    width: 100%;
    height: 100vh;
}

.plane img {
    /* 隐藏 img 对象 */
    display: none;
}
</style>