<template>
  <div class="spinner-loader">
    <div class="spinner-inner">
      <img src="../../assets/loader-spinner.gif" />
    </div>
  </div>
</template>

<style scoped>
.spinner-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px 0;
}
.spinner-inner {
  flex-grow: 1;
}
.spinner-inner img {
  width: 120px;
}
</style>

<script>
export default {
  name: "SpinnerLoader"
};
</script>
