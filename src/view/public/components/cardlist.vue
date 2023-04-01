<template>
  <div class="card-list">
    <div v-for="(item, index) in items" :key="index" class="card">
      <div> 
          <div class="image-container">
            <a data-pswp-width='512' data-pswp-height='512' target='_blank' href="item.imageUrl">
              <img class="card-cover" :src="item.imageUrl" alt="card image" />
            </a>
          </div>
         <div class="content-container">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
         </div>
      </div>
      <div class="tags">
         <span v-for="(tag, index) in item.tags" :key="index" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Card Title 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://qmplusimg.henrongyi.top/1576554439myAvatar.png',
          tags: ['Tag 1', 'Tag 2'],
        },
        {
          title: 'Card Title 2',
          description:
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageUrl: 'https://qmplusimg.henrongyi.top/1576554439myAvatar.png',
          tags: ['Tag 3'],
        },
        {
          title: 'Card Title 3',
          description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          imageUrl: 'https://qmplusimg.henrongyi.top/1576554439myAvatar.png',
          tags: ['Tag 4', 'Tag 5', 'Tag 6'],
        },
                {
          title: 'Card Title 3',
          description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          imageUrl: 'https://qmplusimg.henrongyi.top/1576554439myAvatar.png',
          tags: ['Tag 4', 'Tag 5', 'Tag 6'],
        },
                {
          title: 'Card Title 3',
          description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          imageUrl: 'https://qmplusimg.henrongyi.top/1576554439myAvatar.png',
          tags: ['Tag 4', 'Tag 5', 'Tag 6'],
        },
                {
          title: 'Card Title 3',
          description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          imageUrl: 'https://qmplusimg.henrongyi.top/1576554439myAvatar.png',
          tags: ['Tag 4', 'Tag 5', 'Tag 6'],
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-left: 15px;
  /*justify-content: space-around;*/
}

.card {
  background-color: #272929;
  color: #c6c9cf;
  width: 250px;
  height: 90px;
  padding: 16px;
  border: none;
  border-radius: 8px;
  box-shadow: 1px 1px 8px rgba(20, 20, 20, 0.9);
  transition: all 0.1s ease-out;

}

.card:hover {
  /*box-shadow: 4px 4px 12px rgba(150, 145, 137, 0.688);*/
  transform: translate(0,-5px);
  color: #fafbfd;
}

.image-container {
  width: 48px;
  margin-right: 16px;
  float: left;
}

.card-cover {
  width: 100%;
  object-fit: cover;
  border-radius: 24px;
}

.content-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 6px;
}

p {
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 8px;
  height: 36px;
  overflow: hidden;
  display: block;
  color: #6c757d;
}

.tags {
  margin-top: auto;
}

.tag {
  display: inline-block;
  padding: 4px 16px;
  background-color: #181717;
  color: #6c757d;
  font-size: 12px;
  line-height: 1;
  margin-right: 8px;
  border-radius: 4px;
}
.tag:hover{
  color: #f6f9ff;
}
</style>