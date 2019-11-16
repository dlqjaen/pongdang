<template>
  <section id="default__layout">
    <Header />
    <nuxt />
    <Footer />
  </section>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#default__layout {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
}
</style>
