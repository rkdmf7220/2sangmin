<template>
  <ul class="marquee-list">
    <li class="marquee-item" v-for="(n, index) in 5" :key="index" v-bind:style="{backgroundImage: 'url(./img/marquee/img_intro_' + n + '.png)'}">
    </li>
  </ul>
</template>

<script>
export default {
  name: "IntroMarquee"
}
</script>

<style scoped lang="scss">
  .marquee-list{
    width: 100%;
    height: 100%;
    position: absolute;

    .marquee-item{
      height: 20%;
      background-repeat: repeat-x;
    }
  }
</style>