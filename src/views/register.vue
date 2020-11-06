<template>
  <div class="register">
    <registerComp></registerComp>
  </div>
</template>

<script>
import registerComp from '../components/registerComp.vue';

export default {
  components: {
    'registerComp': registerComp,
  },
  methods:{
     
  }
}
</script>

<style>
 .register {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #19caad;
  }
</style>
