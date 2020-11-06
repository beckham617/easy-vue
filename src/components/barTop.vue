<template>
  <header class="bar bar-nav bar-easy-vue">
    <a class="icon icon-refresh pull-left" v-if="showRefeshIcon" @click="refresh"></a>
    <a class="icon icon-left-nav pull-left" v-if="showReturnIcon" @click="goBack"></a>
    <a class="icon icon-compose pull-right" v-if="showWriteIcon" @click="writeSome"></a>
    <h1 class="title">Yummy</h1>
  </header>
</template>

<script>
export default {
  props: {
    showRefeshIcon: {
      default: true
    },
    showReturnIcon: {
      default: true
    },
    showWriteIcon: {
      default: true
    },
  },
  methods:{
    writeSome: function() {
      // this.$store.commit('isShowAlert', true);
      this.$router.push("/createRecipe");
    },
    refresh: function() {
      this.$store.dispatch('getData', {
        progress: this,
        refresh: true
      });
    },
    goBack: function() {
      this.$router.back();
    }
  }
}
</script>

<style>
  .bar-easy-vue {
    background-color: #19caad;
  }
  .bar-easy-vue a, h1 {
    color: #fff !important;
  }
</style>
