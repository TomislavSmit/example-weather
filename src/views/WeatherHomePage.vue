<template>
  <div class="hello">
    <h1>Weather API CC</h1>

    <search-bar @handleSearch="searchCities" />

    <template v-if="loading">
      <spinner-loader />
    </template>
    <template v-if="!!Object.keys(city).length">
      <cities-list-item
        :city="city"
        @addCity="addCityToList"
        :shouldDisplayAddButton="true"
      />
    </template>
    <template v-else>
      <div class="cities-list">
        Type to seach the city
      </div>
    </template>

    <hr />

    <cities-list />
  </div>
</template>

<style scoped>
.cities-list {
  margin: 24px 0;
}
</style>

<script>
import CitiesList from "../components/cities-list/CitiesList.vue";
import CitiesListItem from "../components/cities-list/CitiesListItem.vue";
import SearchBar from "../components/common/SearchBar.vue";
import SpinnerLoader from "../components/common/SpinnerLoader.vue";

export default {
  components: { SearchBar, CitiesListItem, SpinnerLoader, CitiesList },
  name: "WeatherHomePage",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    city() {
      return this.$store.getters["cities/city"];
    }
  },
  methods: {
    searchCities(term) {
      this.loading = true;
      this.$store.dispatch("cities/fetchCity", term).finally(() => {
        this.loading = false;
      });
    },
    addCityToList() {
      this.$store.dispatch("cities/addCityToList", this.city);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
