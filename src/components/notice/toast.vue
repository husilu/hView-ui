<template lang="pug">
  div(class='outer' :class='toastClass')
    div(class='toast-wrapper')
      div(v-if='enableHtml' v-html='message' class='message')
      div(v-else class='message') {{message}}
      //- div(v-if='closeBtn' class='close-btn' @click='userCustClose') {{closeBtn.btnText}}
</template>

<script>
export default {
  name: "s-toast",
  props: {
    duration: {
      type: Number,
      default: 6000
    },
    message: {
      type: String
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      default: "top",
      validator(val) {
        return ["top", "middle", "bottom"].includes(val);
      }
    }
    // closeBtn: {
    //   validator(val) {
    //     let flag = true;
    //     for (let key of Object.keys(val)) {
    //       if (!["btnText", "callback"].includes(key)) {
    //         flag = false;
    //         break;
    //       }
    //     }
    //     if (flag) {
    //       val["btnText"] = val["btnText"] || "关闭";
    //     }
    //     return flag;
    //   }
    // }
  },
  mounted() {
    this.autoClose();
  },
  computed: {
    toastClass() {
      return `show-on-${this.position}`;
    }
  },
  methods: {
    autoClose () {
      setTimeout(() => {
        this.close()
      }, this.duration)
    },
    close () {
      this.$el.remove()
      this.$emit('closed')
      this.$destroy()
    },
    // userCustClose () {
    //   this.close()
    //   this.closeBtn.callback(this)
    // },
    componentMethod () {
      // console.log('我是组件方法')
    }
  }
};
</script>

<style lang="less" scoped>
@toast-bg: #282c34;
@toast-text-color: #fff;
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.outer {
  z-index: 30;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  &.show-on-top {
    top: 20px;
    .toast-wrapper {
      animation: slide-down 0.5s;
    }
  }
  &.show-on-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .toast-wrapper {
      animation: fade-in 0.5s;
    }
  }
  &.show-on-bottom {
    bottom: 20px;
    .toast-wrapper {
      animation: slide-up 0.5s;
    }
  }
  .toast-wrapper {
    padding: 0.8em 0em;
    background: @toast-bg;
    color: @toast-text-color;
    border-radius: 4px;
    display: flex;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .message {
      max-width: 400px;
      padding: 0 1.2em;
    }
    .close-btn {
      padding: 0 1.2em;
      flex-shrink: 0;
      border-left: 1px solid #fff;
    }
  }
}
</style>
