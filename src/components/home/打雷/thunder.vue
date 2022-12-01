<template>
<div id="backthunder">
<div id="contents">
    <canvas id="canvasThunder">This browser cannot use a canvas.</canvas>
    <canvas id="canvasCloud">This browser cannot use a canvas.</canvas>
    <canvas id="canvasRain">This browser cannot use a canvas.</canvas>
</div>
</div>
</template>

<script>
import  "./rain";
  export default {
    
  }
</script>

<style lang="scss" scoped>
/********************
  Common
********************/

// html,
// body {
//     height: 100%;
//     width: 100%;
//     font-family: Helvetica, verdana, monospace;
//     color: #FFFFFF;
//     font-size: 100%;
//     padding: 0;
//     margin: 0;
//     letter-spacing: 0.2rem;
//     overflow: hidden;
//     background: #131041;
// }
a {
    color: #FFF;
    text-decoration: none;
}
h1 {
    font-size: 1.6rem;
}
h2 {
    padding: 0.8rem 0 0 0;
}
p {
    padding: 0.8rem 0;
    font-size: 0.8rem;
}
div#main {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1.6rem;
    z-index: 4;
}
/********************
  Contents
********************/

canvas {
    position: absolute;
    top: 0;
    left: 0;
}
canvas#canvasThunder {
    z-index: 1;
    background: #131041;
}
canvas#canvasCloud {
    z-index: 2;
}
canvas#canvasRain {
    z-index: 3;
}
canvas {
  background-color: #3e5477;
//   background-image: url("@/assets/img/大雨.jpg");
//   background-repeat: no-repeat;
//   background-attachment: scroll;
//   background-size: contain;
//   background-size: 100% 100%;
//   height: 100%;
//   position: fixed;
//   width: 100%;
//   text-align: center;
}
</style>