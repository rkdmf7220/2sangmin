<template>
  <div class="nav-menu" :class="{show : this.isActive}">
    <ul class="menu-wrap">
      <li v-for="item in menu" :key="item.name" class="menu-item">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    isActive: Boolean
  },
  mounted() {
    this.menu = this.$router.options.gnb;
  },
  data() {
    return{
      menu: []
    }
  }
}
</script>

<style scoped lang="scss">
  .nav-menu{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(4px);
    display: none;
    z-index: 990;

    &.show{
      display: flex;
    }

    .menu-wrap{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transform: translateX(-50%);
      font-size: 5.5rem;

      .menu-item{

        a{
          color: black;
        }
      }
    }
  }
</style>