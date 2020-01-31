<template>
  <article id="food__category">
    <article id="header">
      <h1 class="title">직장인 이심점심</h1>
      <p class="sub-title">오늘 뭐 먹었어?</p>
    </article>
    <article>
      <h2 class="a11y-hidden">음식 카테고리</h2>
      <ul class="category__list">
        <li class="category" v-for="category in foodCategory" :key="category">
          <nuxt-link
            class="category-link"
            :to="`food/${category}`"
            
            v-html="getCategory(category)"
          />
        </li>
      </ul>
    </article>
  </article>

</template>

<script>
import axios from '~/plugins/axios';

export default {
  name: 'food-category-selecter',
  layout: 'main',
  async asyncData() {
    let { data } = await axios.get('/api/food/category');
    return { foodCategory: data };
  },
  methods: {
    getCategory(category) {
      switch (category) {
        case 'korea':
          return '한식';
        case 'asia':
          return '중식/동남아';
        case 'fast':
          return '분식/패스트푸드';
        case 'japanese':
          return '일식'
        case 'western':
          return '양식';
        case 'wellbeing':
          return '다이어트식';
      }
    }
  }
};
</script>

<style scoped>
.title {
  font-weight: normal;
  font-size: 1.4rem;
  color: #ffc000;
}
.sub-title {
  font-weight: bold;
  font-size: 1.8rem;
  margin-top: 10px;
}
.category__list {
  width: 250px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 120px);
  margin: 50px auto;
}
.category {
  border: 1px solid #bfbfbf;
  background-color: #f2f2f2;
  border-radius: 20px;
}
.category-link {
  padding: 50px 0px;
}
</style>
