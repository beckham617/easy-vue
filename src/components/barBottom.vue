<template>
  <nav class="bar bar-tab easy-bottom-bar">
    <router-link class="tab-item" to="/home">
      <span class="icon fa fa-home" :class="{'easy-fa-color': isHome}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isHome}">Home</span>
    </router-link>
    <router-link class="tab-item" to="/search">
      <span class="icon fa fa-search" :class="{'easy-fa-color': isSearch}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isSearch}">Search</span>
    </router-link>
    <router-link class="tab-item" to="/lists">
      <span class="icon fa fa-heart" :class="{'easy-fa-color': isList}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isList}">Favorite</span>
    </router-link>
    <router-link class="tab-item" to="/option">
      <span class="icon icon-person" :class="{'easy-fa-color': isOption}"></span>
      <span class="tab-label" :class="{'easy-fa-color': isOption}">Me</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  data: () => ({
    isHome: true,
    isSearch: false,
    isList: false,
    isOption: false,
  }),
  mounted: function() {
    this.$nextTick(function() {
      const uri = this.$route.path;
      if (uri === '/home') {
        this.isHome = true;
        this.isSearch = false;
        this.isList = false;
        this.isOption = false;
      }
      if (uri === '/search') {
        this.isHome = false;
        this.isSearch = true;
        this.isList = false;
        this.isOption = false;
      }
      if (uri === '/lists') {
        this.isHome = false;
        this.isSearch = false;
        this.isList = true;
        this.isOption = false;
      }
      if (uri === '/option') {
        this.isHome = false;
        this.isSearch = false;
        this.isList = false;
        this.isOption = true;
      }
    });
  },
  methods: {

  }
}
</script>

<style>
.easy-bottom-bar {
  background-color: #19caad;
  color: #fff;
  border: none;
}
.easy-bottom-bar a {
  color: #cdd !important;
}
.easy-fa-color {
  color: #fff !important;
}
</style>
