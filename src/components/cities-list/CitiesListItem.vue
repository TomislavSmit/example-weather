<template>
  <div class="cities-list-item">
    <div class="item">{{ city.name }}, {{ city.sys.country }}</div>
    <div class="item">{{ tempInCelsius }}°C</div>
    <div class="item" v-if="shouldDisplayAddButton">
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
import calculateInCelsius from "../../utils/calculate-temperature";
export default {
  name: "CitiesListItem",
  props: {
    city: {
      type: Object,
      required: true
    },
    shouldDisplayAddButton: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tempInCelsius() {
      return calculateInCelsius(this.city.main.temp);
    }
  },
  methods: {
    handleAddCity() {
      this.$emit("addCity");
    }
  }
};
</script>
