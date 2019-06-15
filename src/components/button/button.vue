<template lang="pug">
  button.h-button(:class='btnClass' :disabled='isDisabled' @click="$emit('click')")
    div.btn-content
      slot
</template>

<script>
/* eslint-disable */
export default {
  props: {
    type: {
      type: String,
      validator (val) {
        return ['primary', 'error', 'success', 'warning', 'default'].includes(val)
      },
      default: 'default'
    },
    size: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass() {
      let classList = [];
      if (this.type) classList.push(`h-${this.type}-btn`);
      if (this.disabled) classList.push(`h-disabled`);
      if (this.size) classList.push(`h-${this.size}`);
      return classList.join(" ");
    },
    isDisabled() {
      if (this.disabled) {
        return "disabled";
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="less">
.h-button {
  white-space: nowrap;
  user-select: none;
  display: inline-block;
  text-align: center;
  padding: 5px 15px 6px;
  height: 32px;
  line-height: 30px;
  font-size: 12px;
  border-radius: 3px;
  cursor: pointer;
  min-width: 70px;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear;
  &:hover {
    opacity: 0.7;
  }
  &.h-disabled {
    background-color: #f7f7f7;
    border: 1px solid #dcdee2;
    color: #c5c8ce;
    cursor: not-allowed;
    opacity: 0.7;
  }
  // size:
  &.h-small {
    padding: 1px 7px 2px;
  }
  &.h-large {
    padding: 6px 15px;
  }
  // type:
  &.h-default-btn {
    color: #515a6e;
    background-color: #fff;
    border: 1px solid #dcdee2;
    &.hover {
      border: 1px solid #dcdee2;
    }
  }
  &.h-primary-btn {
    border: 1px solid #2d8cf0;
    color: #fff;
    background-color: #2d8cf0;
    &.hover {
      background-color: #57a3f3;
      border: #57a3f3;
    }
  }
  &.h-success-btn {
    border: 1px solid #19be6b;
    color: #fff;
    background-color: #19be6b;
    border-color: #19be6b;
  }
  &.h-warning-btn {
    border: 1px solid #f90;
    color: #fff;
    background-color: #f90;
    border-color: #f90;
  }
  &.h-error-btn {
    color: #fff;
    background-color: #ed4014;
    border: 1px solid #ed4014;
  }
  &[disabled="disabled"] {
    background-color: #f7f7f7;
    border: 1px solid #dcdee2;
    color: #c5c8ce;
    cursor: not-allowed;
    opacity: 0.7;
  }
}
</style>
