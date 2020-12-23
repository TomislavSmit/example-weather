<template>
  <div class="cities-list-item">
    {{ city }}
  </div>
</template>

<style scoped>
.cities-list-item {
  border: 1px solid grey;
  border-radius: 6px;
  padding: 12px;
  margin: 12px 0;
}
</style>

<script>
export default {
  name: "CitiesListItem",
  props: {
    city: {
      type: Object,
      required: true
    }
  }
};
</script>
