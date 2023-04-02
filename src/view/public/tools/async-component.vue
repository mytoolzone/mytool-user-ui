<template>
  <div>
    <ai-visit v-if="innerComp=='aivisit'"></ai-visit>
  </div>
</template>

<script>
import AiVisit from "./ai-visit.vue"

export default {
  props:{
    innerComp: {}
  },
  components:{
    AiVisit
  },
  data() {
    return {
      tag: '',
      keyword: '',
      items: [],
    };
  },
  mounted(){

  },
  watch: {}
}
</script>