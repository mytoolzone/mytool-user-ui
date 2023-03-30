<template>
  <div class="card-list">
    <Card v-for="(card, index) in cards" :key="index" :title="card.title" :image="card.image" :description="card.description" :tags="card.tags" />
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          title: 'Card 1',
          image: 'https://via.placeholder.com/150',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          tags: ['Tag 1', 'Tag 2', 'Tag 3']
        },
        {
          title: 'Card 2',
          image: 'https://via.placeholder.com/150',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          tags: ['Tag 4', 'Tag 5']
        },
        {
          title: 'Card 3',
          image: 'https://via.placeholder.com/150',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          tags: ['Tag 6', 'Tag 7', 'Tag 8', 'Tag 9']
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
    width: calc(33.33% - 10px);

    img {
      width: 100%;
      height: auto;
      margin-bottom: 10px;
    }

    h3 {
      margin: 0;
      font-size: 20px;
      font-weight: bold;
    }

    p {
      margin: 10px 0;
      font-size: 14px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;

      .tag {
        background-color: #ccc;
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
        padding: 2px 6px;
        margin-right: 5px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>