<template>
  <div class="create-recipe">
    <bar-top
    :show-refesh-icon="false"
    :show-return-icon="true"
    :show-write-icon="false"></bar-top>
    <create-recipe-comp></create-recipe-comp>
  </div>
</template>

<script>
import barTop from '../components/barTop.vue';
import createRecipeComp from '../components/createRecipeComp.vue';

export default {
  components: {
    'bar-top': barTop,
    'create-recipe-comp': createRecipeComp,
  },
  methods:{

  }
}
</script>

<style>
.create-recipe {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #19caad;
  }
</style>
