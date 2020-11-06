<template>
  <div class="registerComp">
    <p class="registerTitle">Please enter the information to register:</p>
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
    <div>
      <button class="easy-button" @click="showAlert">Submit</button>
    </div>
    <alert :onDismiss="toLogin" alertTitle="Successful!"></alert>
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
      showAlert: function() { this.$store.commit("isShowAlert", true) },
      toLogin: function() { this.$router.push("/") }
  }
}
</script>

<style>
    .registerTitle{
        align-self: center;
        font-family: 'Hind', sans-serif;
        /* font-family: 'Source Sans Pro', sans-serif; */
        font-size: 15px;
        color: rgb(255, 255, 255);
    }
    .registerComp {
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
