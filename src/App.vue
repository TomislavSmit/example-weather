<template>
  <div id="app">
    <weather-home-page />
  </div>
</template>

<script>
import WeatherHomePage from "./views/WeatherHomePage";

export default {
  name: "App",
  components: {
    WeatherHomePage
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
