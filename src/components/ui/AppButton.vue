<template>
  <button class="app-button" :class="classes" @click="handleClick()">
    {{ text }}
  </button>
</template>

<style scoped>
.app-button {
  padding: 8px 16px;
  background-color: lightblue;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>

<script>
export default {
  name: "AppButton",
  props: {
    text: {
      type: String,
      default: "Submit"
    },
    classes: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClick() {
      this.$emit("click-button");
    }
  }
};
</script>
