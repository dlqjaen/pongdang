<template>
  <article id="footer">
    <h2 class="linked-user">현재 접속자수 <b class="linked-number">{{linked}}</b></h2>
  </article>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'Footer',
  data() {
    return {
      linked: 0
    }
  },
  async mounted() {
    let { data } = await axios.get('/api/users/linked')
    this.linked = data
  }
}
</script>

<style scoped>
#footer {
  margin-top: 80px;
}
.linked-user {
  display: inline-block;
  padding: 5px 25px;
  background-color: #333333;
  font-weight: normal;
  font-size: 0.9rem;
  color: #ffffff;
  border-radius: 20px;
}
.linked-number {
  margin-left: 5px;
  color: #ffc000;
}
</style>