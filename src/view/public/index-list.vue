<template>
    <div><search></search></div>
    <div><cardlist></cardlist></div>
</template>

<script>
import Search from './components/search.vue'
import Cardlist from './components/cardlist.vue'
export default {
  name: 'MyPage',
  components: {
    Search,
    Cardlist,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>

</style>