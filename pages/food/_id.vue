<template>
  <article id="food-selecter">
    <h2 class="a11y-hidden">음식 선택 단계</h2>
    <ul class="food__container"
      :style="{width: `${50 * foodList.length}%`,
      gridTemplateColumns: `repeat(${foodList.length}, 1fr)`,
      left: `${foodPosition}%`
    }">
      <li class="food__list" v-for="food in foodList" :key="food">
        <p class="food">{{food}}</p>
      </li>
    </ul>
  </article>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'food-selecter',
  async asyncData ({ params, error }) {
    let { data } = await axios.get(`/api/food/${params.id}`)
    return {foodList: data}
  },
  data() {
    return {
      foodPosition: 0,
      rotationObject: null
    }
  },
  mounted() {
    this.rotationObject = setInterval(() => {
      if (this.foodPosition === (this.foodList.length * -50) + 50) {
        this.foodPosition = 0;
      } else {
        this.foodPosition -= 50;
      }
    }, 1000)
  }
}
</script>

<style scoped>
#food-selecter {
  margin: 80px auto 0;
  max-width: 450px;
  overflow: hidden;
}
.food__container {
  position: relative;
  display: grid;
  justify-content: space-between;
  text-align: center;
  margin-left: 25%;
  transition: left 0.5s;
}
.food__list {
  align-self: center;
  justify-self: center;
}
.food {
  width: 180px;
  padding: 80px 0;
  border-radius: 50%;
  border: 1px solid red;
}
</style>
