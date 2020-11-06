<template>
  <div class="search">
    <bar-top
    :show-refesh-icon="true"
    :show-return-icon="false"
    :show-write-icon="true"></bar-top>
    <search-bar></search-bar>
    <list></list>
    <bar-bottom></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
import barTop from '../components/barTop.vue';
import list from '../components/list.vue';
import barBottom from '../components/barBottom.vue';
import alert from '../components/alert.vue';
import searchBar from '../components/searchBar.vue';

export default {
  components: {
    'bar-top': barTop,
    'list': list,
    'alert': alert,
    'bar-bottom': barBottom,
    'search-bar': searchBar,
  },
  methods: {

  }
}
</script>

<style>
    .search{
        display: flex;
        flex-direction: column;
    }
</style>
