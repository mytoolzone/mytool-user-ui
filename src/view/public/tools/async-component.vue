<template>
  <div >
    <ai-visit v-if="innerComp=='ai-visit'"></ai-visit>
    <ai-write v-if="innerComp=='ai-writer'"></ai-write>
    <ai-cook v-if="innerComp=='ai-cook'"></ai-cook>
    <ai-lawyer v-if="innerComp=='ai-lawyer'"></ai-lawyer>
    <ai-interview v-if="innerComp=='ai-intewview'"></ai-interview>
    <ai-code-gen v-if="innerComp=='ai-codegen'"></ai-code-gen>
    <ai-it-assistant v-if="innerComp=='ai-it-assistant'"></ai-it-assistant>
    <ai-product-manager v-if="innerComp=='ai-product-manager'"></ai-product-manager>
  </div>
</template>

<script>
import AiVisit from "./ai-visit.vue"
import AiWrite from "./ai-write.vue"
import AiCook from "./ai-cook.vue"
import AiLawyer from "./ai-lawyer.vue"
import AiInterview from "./ai-interview.vue"
import AiCodeGen from "./ai-codegen.vue"
import AiItAssistant from "./ai-it-assistant.vue"
import AiProductManager from "./ai-product-manager.vue"


export default {
  props:{
    innerComp: {}
  },
  components:{
    AiVisit,
    AiWrite,
    AiCook,
    AiLawyer,
    AiInterview,
    AiCodeGen,
    AiItAssistant,
    AiProductManager
  },
  data() {
    return {
      tag: '',
      keyword: '',
      items: [],
    };
  },
  mounted(){
    console.log('innerComp')
  },
  watch: {}
}
</script>