<template>
  <div class="cities-list-item">
    <div class="item">
      {{ city.name }}
    </div>
    <div class="item">
      <button @click="handleAddCity()">Add</button>
    </div>
  </div>
</template>

<style scoped>
.cities-list-item {
  display: flex;
  justify-content: stretch;
  border: 1px solid grey;
  border-radius: 6px;
  padding: 12px;
  margin: 12px 0;
}
.item {
  flex-grow: 1;
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
  },
  methods: {
    handleAddCity() {
      this.$emit("addCity");
    }
  }
};
</script>
