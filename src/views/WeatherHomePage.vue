<template>
  <div class="hello">
    <h1>Weather API CC</h1>

    <search-bar @handleSearch="searchCities" />

    <template v-if="loading">
      Loading...
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

<style scoped>
.cities-list {
  margin: 24px 0;
}
</style>

<script>
import CitiesListItem from "../components/cities-list/CitiesListItem.vue";
import SearchBar from "../components/common/SearchBar.vue";

export default {
  components: { SearchBar, CitiesListItem },
  name: "WeatherHomePage",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    city() {
      return this.$store.getters["cities/city"];
    },
    cities() {
      return this.$store.getters["cities/cities"];
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
