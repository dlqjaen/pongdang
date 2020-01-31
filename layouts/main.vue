<template>
  <section id="default__layout">
    <nuxt />
    <Footer />
  </section>
</template>

<script>
import Footer from '../components/Footer';

export default {
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  components: {
    Footer
  }
}
</script>

<style scoped>
@media screen and (max-width: 425px) {
  #default__layout {
    padding: 20px 0;
    text-align: center;
  }
}
@media screen and (min-height: 560px), screen and (min-width: 426px) {
  #default__layout {
    /* position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%); */
    padding: 20px 0;
    text-align: center;
  }
}
</style>