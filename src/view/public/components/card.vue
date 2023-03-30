<template>
  <div class="card">
    <a data-pswp-width='512' data-pswp-height='512' target='_blank' href="image"><img :src="image" alt="Card Image" /></a>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="tags">
      <span v-for="(tag, index) in tags" :key="index">{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    image: String,
    description: String,
    tags: Array
  }
}
</script>