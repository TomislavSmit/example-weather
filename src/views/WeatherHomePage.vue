<template>
  <div class="hello">
    <h1>Weather API CC</h1>

    <search-bar @handleSearch="searchCities" />

    <cities-list-item :city="city" />
  </div>
</template>

<script>
import CitiesListItem from "../components/cities-list/CitiesListItem.vue";
import SearchBar from "../components/common/SearchBar.vue";

export default {
  components: { SearchBar, CitiesListItem },
  name: "WeatherHomePage",
  computed: {
    city() {
      return this.$store.getters["cities/city"];
    }
  },
  methods: {
    searchCities(term) {
      this.$store.dispatch("cities/fetchCity", term);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
