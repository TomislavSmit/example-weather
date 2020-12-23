<template>
  <div class="hello">
    <h1>Weather API CC</h1>

    <search-bar @handleSearch="searchCities" />
  </div>
</template>

<script>
import SearchBar from "../components/common/SearchBar.vue";

export default {
  components: { SearchBar },
  name: "WeatherHomePage",
  props: {
    msg: String
  },
  methods: {
    searchCities(term) {
      console.log(term);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
