<template>
  <div class="backg">
     <div>
      <div class="backg">
        <div class="outer1">
          <div class="outer">
            <h1
              style="margin-top: -100px; margin-bottom: 30px"
              class="animate__fadeInUp"
            >
              全国招聘大数据分析系统
            </h1>
            <h2 id="one" class="animate__fadeInTopRight">
              本系统致力于对岗位进行分析
            </h2>
            <h2 id="two" class="animate__fadeInTopRight">
              希望在这岗位五花八门的时代
            </h2>
            <h2 id="three" class="animate__fadeInBottomLeft">
              能为您提高找工作的效率
            </h2>
            <h2 id="four" class="animate__fadeInBottomLeft">
              希望您在本系统得到帮助
            </h2>
          </div>
          <router-link to="/home">
            <div class="butt1">
              <button class="animate__bounceInUp" id="butt" title="点击进入">
                <p style="letter-spacing: 1em;
                 margin-right: -20px;
                 text-align: center;
                 ">
                进入
                </p>
                </button>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.backg {
  background-image: url("@/assets/4.jpg");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: contain;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
  text-align: center;
}
.outer1 {
  display: inline-block;
  position: relative;
  top: 30%;
  font-weight: 900;
}
.outer {
  font-family: STZhongsong;
  font-size: 25px;
  color: rgba(18, 188, 231, 0.837);
  line-height: 90px;
  width: 700px;
  height: 600px;
  /* position: relative; */
  text-align: center;
}
#one {
  animation-duration: 2s;
}
#two {
  animation-duration: 2.5s;
}
#three {
  animation-duration: 2s;
}
#four {
  animation-duration: 2.5s;
}
h1 {
  animation-duration: 2s;
}
#butt {
  animation-duration: 2s;
}

.butt1 {
  margin-top: -100px;
}
#butt {
  cursor: pointer;
  font-family: STZhongsong;
  border: solid white 1px;
  font-size: 20px;
  width: 150px;
  height: 40px;
  color: white;
  background: transparent; /*按钮背景透明*/
  border-width: 0px; /*边框透明*/
  outline: solid; /*点击后没边框*/
  border-radius: 10px;
  /* letter-spacing: 1em; */
  /* text-align: center; */
}
#butt:hover{
  color: aqua;
}
</style>