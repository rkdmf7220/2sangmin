<template>
  <div class="intro">
    <intro-marquee/>
    <div class="sticky-box">
      <span>{{homeInfo.subTitle}}</span>
      <span>{{homeInfo.title}}</span>
    </div>
  </div>
  <div class="about">

  </div>
</template>

<script>

import IntroMarquee from "../components/IntroMarquee";
export default {
  name: 'Home',
  components: {IntroMarquee},
  computed: {
    homeInfo() {
      return this.$store.state.homeInfo
    }
  },
  mounted() {
    this.$store.dispatch('loadHomeInfo')
  }
}
</script>

<style lang="scss">
  .intro{
    height: 225vh;

    .sticky-box{
      width: 600px;
      height: 200px;
      position: sticky;
      top: 33vh;
      margin: 0 auto 0 auto;
      border: 1px solid #ddd6cb;
      color: white;
      background-color: #181212;
    }
  }
  .about{
    height: 2000px;
  }
</style>