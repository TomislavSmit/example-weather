<template>
  <div>
    <template v-if="!!Object.keys(cities).length">
      <cities-list-item
        :city="city"
        v-for="(city, index) in cities"
        :key="index"
      />
    </template>
    <template v-else>
      <div class="cities-list">
        No cities in list
      </div>
    </template>
  </div>
</template>

<script>
import CitiesListItem from "./CitiesListItem.vue";
export default {
  components: { CitiesListItem },
  name: "CitiesList",
  computed: {
    cities() {
      return this.$store.getters["cities/cities"];
    }
  }
};
</script>
