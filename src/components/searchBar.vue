<template>
    <p class="content table-view easy-list"> 
        <label>Name, ingredient...</label>
        <md-input v-model="initial"></md-input>
    </p>
</template>

<script>
export default {
  methods:{
    writeSome: function() {
      this.$store.commit('isShowAlert', true);
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
