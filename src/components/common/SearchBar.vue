<template>
  <div>
    <input type="text" @keydown="handleSearch()" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    handleSearch() {
      console.log("search");
    }
  }
};
</script>
