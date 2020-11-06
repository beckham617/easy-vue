<template>
  <div class="login">
    <loginComp></loginComp>
  </div>
</template>

<script>
import loginComp from '../components/loginComp.vue';

export default {
  components: {
    'loginComp': loginComp
  },
  methods:{

  }
}
</script>

<style>
  .login {
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #19caad;
  }
</style>
