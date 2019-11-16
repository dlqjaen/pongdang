<template>
  <article id="food__category">
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
</template>

<script>
import axios from "~/plugins/axios";

export default {
  name: 'food-category-selecter',
  async asyncData() {
    let { data } = await axios.get("/api/food/category");
    return { foodCategory: data };
  },
  methods: {
    getCategory(category) {
      switch (category) {
        case "korea":
          return "한식";
        case "asia":
          return "아시안 &<br> 중식";
        case "fast":
          return "분식 &<br> 패스트푸드";
        case "western":
          return "양식";
      }
    }
  }
};
</script>

<style scoped>
.category__list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 120px);
  margin-top: 50px;
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
