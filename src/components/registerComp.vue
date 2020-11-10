<template>
  <div class="register-comp">
    <p class="register-title">Register</p>
    <md-field>
      <label>Email</label>
      <md-input v-model="initial"></md-input>
    </md-field>
    <!-- <label for="email">Email</label>
    <input type="text" id="email" name="email" class="input" placeholder="Email" /> -->

    <md-field>
      <label>Password</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
    <!-- <label for="password">Pssword</label>
    <input type="password" id="password" name="password" class="password" placeholder="Password" /> -->

     <md-field>
      <label>Password Confirmation</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
    <!-- <label for="password">Pssword</label>
    <input type="password" id="password" name="password" class="password" placeholder="Re-enter password" /> -->
    <br/>
    
    <br/>
    <div class="login-comp-button">
      <router-link to="/">
        <md-button class="md-raised">Cancel</md-button>
      </router-link>
      <md-button class="md-raised" @click="submit = true">Submit</md-button>
    </div>

    <md-dialog-alert
      :md-active.sync="submit"
      md-content="Your registration is successful!"
      md-confirm-text="OK!" 
      @click="toLogin" />

    <alert :onDismiss="toLogin" alertTitle="Successful!"></alert>
  </div>
</template>

<script>
import barTop from '../components/barTop.vue';
import card from '../components/card.vue';
import barBottom from '../components/barBottom.vue';
import alert from '../components/alert.vue';

export default {
  name: 'DialogAlert',
  data: () => ({
      submit: false
  }),
  components: {
    // 'bar-top': barTop,
    // 'card': card,
    'alert': alert,
    // 'bar-bottom': barBottom,
  },
  methods:{
      showAlert: function() { 
        this.submit = true;
        // this.$store.commit("isShowAlert", true) 
      },
      toLogin: function() { 
        this.$router.push("/") }
      }
}
</script>

<style>
    .register-title{
        align-self: center;
        font-family: 'Hind', sans-serif;
        /* font-family: 'Source Sans Pro', sans-serif; */
        font-size: 20px;
        color: black;
    }
    .register-comp {
        width: 300px;
        align-items: flex-start;
        align-self: center;
        align-content: center;
        border-style: groove;
        border: 2px;
        border:rgb(243, 28, 28);
        align-items: center;
        background-color:  #19caad;
    }
</style>
