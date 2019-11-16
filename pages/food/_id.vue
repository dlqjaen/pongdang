<template>
  <article id="food-selecter">

  </article>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'food-selecter',
  async asyncData ({ params, error }) {
    let { data } = await axios.get(`/api/food/${params.id}`)
    return {foodList: data}
  }
}
</script>

<style scoped>
</style>
