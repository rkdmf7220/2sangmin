<template>
  <header class="header" :class="{active: !this.isActive}">
    <router-link to="/"><h1 class="header-logo"><svg width="100" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25 4H4v16h21V4Zm-20.556.435h1.518v1.48l1.516-1.48h14.275l2.803 2.737v12.393h-6.48v-7.452l1.155-1.127h-1.385v.007h-.236v8.572h-6.456v-7.452l1.154-1.127h-1.385v.007h-.22v8.572H4.445V4.435Z" fill="#DDD6CB"/><path d="M28 17.088h1.456v-6.304c.8-.896 1.536-1.328 2.192-1.328 1.104 0 1.616.688 1.616 2.32v5.312h1.456v-6.304c.816-.896 1.52-1.328 2.192-1.328 1.104 0 1.616.688 1.616 2.32v5.312h1.456v-5.504c0-2.224-.848-3.408-2.64-3.408-1.056 0-1.968.688-2.864 1.664-.352-1.024-1.072-1.664-2.4-1.664-1.04 0-1.952.656-2.704 1.488h-.048L29.2 8.4H28v8.688ZM42.813 17.088h1.456V8.4h-1.456v8.688Zm.735-10.48c.576 0 .977-.384.977-.976 0-.56-.4-.944-.977-.944-.576 0-.976.384-.976.944 0 .592.4.976.976.976ZM47.219 17.088h1.456v-6.304c.88-.88 1.488-1.328 2.384-1.328 1.152 0 1.648.688 1.648 2.32v5.312h1.456v-5.504c0-2.224-.832-3.408-2.656-3.408-1.184 0-2.08.656-2.912 1.472h-.048L48.419 8.4h-1.2v8.688ZM57 17.088h1.456v-6.304c.8-.896 1.536-1.328 2.192-1.328 1.104 0 1.616.688 1.616 2.32v5.312h1.456v-6.304c.816-.896 1.52-1.328 2.192-1.328 1.104 0 1.616.688 1.616 2.32v5.312h1.456v-5.504c0-2.224-.848-3.408-2.64-3.408-1.056 0-1.968.688-2.864 1.664-.352-1.024-1.072-1.664-2.4-1.664-1.04 0-1.952.656-2.704 1.488h-.048L58.2 8.4H57v8.688ZM73.813 17.296c1.072 0 2.047-.56 2.88-1.248h.047l.129 1.04h1.2v-5.344c0-2.144-.897-3.568-3.008-3.568-1.393 0-2.625.624-3.425 1.136l.577 1.008c.688-.464 1.6-.928 2.608-.928 1.424 0 1.791 1.072 1.791 2.192-3.695.416-5.343 1.36-5.343 3.248 0 1.568 1.087 2.464 2.543 2.464Zm.415-1.168c-.863 0-1.535-.4-1.535-1.392 0-1.12.992-1.84 3.92-2.192v2.432c-.849.752-1.537 1.152-2.385 1.152ZM79.612 17.088h1.536l1.168-2.032c.304-.528.592-1.056.896-1.552h.08c.32.496.64 1.024.928 1.552l1.28 2.032h1.6l-2.864-4.384 2.64-4.304h-1.52l-1.072 1.904c-.256.496-.512.976-.784 1.456h-.064c-.288-.48-.592-.96-.864-1.456L81.404 8.4h-1.568l2.64 4.16-2.864 4.528ZM91.165 20.24l.911-.432c-1.391-2.272-2.047-4.976-2.047-7.696 0-2.72.656-5.408 2.047-7.696L91.165 4c-1.473 2.384-2.353 4.976-2.353 8.112 0 3.152.88 5.728 2.353 8.128ZM94.33 20.24c1.489-2.4 2.369-4.976 2.369-8.128 0-3.136-.88-5.728-2.368-8.112l-.896.416c1.376 2.288 2.048 4.976 2.048 7.696 0 2.72-.672 5.424-2.048 7.696l.896.432Z" fill="#DDD6CB"/></svg></h1></router-link>
    <button class="header-menu-btn" @click="onClickMenu">
      <div class="btn-wrap">
        <span></span>
        <span></span>
      </div>
    </button>
  </header>
  <NavMenu :is-active="!this.isActive"></NavMenu>
</template>

<script>
import NavMenu from "./NavMenu";
export default {
  name: "Navigation",
  components: {
    NavMenu
  },
  data() {
    return{
      isActive: Boolean
    }
  },
  methods: {
    onClickMenu() {
      this.isActive = !this.isActive
      console.log(this.isActive)
    }
  }
}
</script>

<style scoped lang="scss">
  .header{
    width: calc(100% - 80px);
    margin: 40px 40px 0 40px;
    position: fixed;
    display: flex;
    align-content: center;
    z-index: 1000;

    .header-logo{
      width: 100px;
      height: 40px;
      margin-left: 0;
      margin-right: auto;
      display: flex;
      align-items: center;
    }

    .header-menu-btn{
      margin-left: auto;
      margin-right: 0;
      width: 40px;
      height: 40px;
      position: relative;
      cursor: pointer;

      span{
        position: absolute;
        width: 100%;
        height: 3px;
        background: #ddd6cb;

        &:first-child{
          top: 12px;
          right: 0;
        }
        &:last-child{
          width: 28px;
          top: 24px;
          right: 0;
        }
      }
    }
  }
</style>