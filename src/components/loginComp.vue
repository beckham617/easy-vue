<template>
  <div class="login-comp">
    <p class="app-title">Welcome to Yummy</p>

    <md-field>
      <label>Email</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>Password</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>

    <!-- <label class="loginComp-text" for="email">Email</label>
    <input type="text" id="email" name="email" placeholder="Email" />

    <label class="loginComp-text" for="password">Pssword</label>
    <input type="password" id="password" name="password" placeholder="Password" /> -->
    
    <br/>

    <div class="login-comp-button">
        <router-link to="/home">
            <md-button class="md-raised">Log in</md-button>
            <!-- <button class="easy-button"> </button> -->
        </router-link>
        <router-link to="/register">
            <md-button class="md-raised">Sign up</md-button>
            <!-- <button class="easy-button"></button> -->
        </router-link>
    </div>
    
    <br/>
    
    <a class="login-comp-text" href="#">Forget password</a>
    
    <alert></alert>
  </div>
</template>

<script>
import barTop from '../components/barTop.vue';
import card from '../components/card.vue';
import barBottom from '../components/barBottom.vue';
import alert from '../components/alert.vue';

export default {
  components: {
    // 'bar-top': barTop,
    // 'card': card,
    // 'alert': alert,
    // 'bar-bottom': barBottom,
  },
  methods:{

  }
}
</script>

<style>

     .app-title{
        align-self: center;
        font-family: 'Hind', sans-serif;
        /* font-family: 'Source Sans Pro', sans-serif; */
        font-size: 30px;
        color: rgb(255, 255, 255);
    }
    
    .login-comp {
        width: 350px;
        align-items: flex-start;
        align-self: center;
        align-content: center;
        border-style: groove;
        border: 2px;
        border:rgb(243, 28, 28);
        align-items: center;
        background-color:  #19caad;
        padding: 10px;
    }


    .login-comp-button {
       display: flex;
       justify-content: center;
    }
   

    .login-comp-text{
        display: flex;
        justify-content: center;
        font-family: 'Hind', sans-serif;
        /* font-family: 'Source Sans Pro', sans-serif; */
        font-size: 15px;
        color: white;
        text-decoration: underline;
    }



</style>
