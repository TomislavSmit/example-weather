<template>
  <div>
    <form @submit.prevent="handleSearch">
      <input type="text" v-model="term" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      term: ""
    };
  },
  methods: {
    handleSearch() {
      this.$emit("handleSearch", this.term);
    }
  }
};
</script>
