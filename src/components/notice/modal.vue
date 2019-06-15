<template lang="pug">
  div.modal-wrap
    div.modal-mask
    div.modal(:style='modalStyle')
      div.modal-title
      div.modal-content(v-if='enableContentHtml' v-html='message')
      div.modal-content(v-else) {{message}}
      div.modal-footer
        my-button(type='primary' size='small' disabled=false)  确认
        my-button(size='small' disabled=false ) 取消
</template>

<script>
import myButton from "@/components/button/button";
export default {
  name: 'h-modal',
  props: {
    title: {
      default: '提示框'
    },
    message: {
      type: String
    },
    enableContentHtml: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.autoClose();
  },
  methods: {
    
  },
  computed: {
    modalStyle() {
      return `show-on-${this.position}`;
    }
  }
}
</script>

<style lang="less">

</style>
