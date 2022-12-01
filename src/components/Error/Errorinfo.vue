<template>
  <el-result title="404" sub-title="很抱歉，页面跳转错误">
    <template #icon>
      <el-image
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </template>
    <template #extra>
      <el-button @click="backhome" type="primary">返回</el-button>
    </template>
  </el-result>
</template>
<script>
export default {
  setup() {
    const backhome = () =>{
      window.history.back();
    }
    return{
      backhome
    }
  }

}
</script>