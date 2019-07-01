<template lang="pug">
  div.hello-world
    div.btn-group 
      p 按钮test1
      my-button(type='primary' size='small' disabled=false)  primary
      my-button(size='small' disabled=false @click='openHandler') 弹出框
      my-button(type='success' size='small' disabled=false)  success
      my-button(type='error' size='small' disabled=false)  error
      my-button(type='warning' size='small' disabled=false)  warning
</template>

<script>
import myButton from "@/components/button/button";
export default {
  name: "HelloWorld",
  components: { myButton },
  methods: {
    // clickHanlder() {
    //   console.log('点击事件')
    // },
    openHandler() {
      this.$toast({
        message: 'toast',
        duration: 2000,
        position: 'top'
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.hello-world {
  .btn-group {
    button {
      margin-right: 5px;
    }
  }
}
</style>
