<template>
  <div class="login">
    <p>Welcome to Yummy</p>
    <label for="email">Email</label>
    <input type="text" id="email" name="email" class="input" placeholder="Email" />

    <label for="password">Pssword</label>
    <input type="password" id="password" name="password" class="password" placeholder="Password" />
    <br/>
    
    <br/>
    <div style="">
    <button class="easy-button">Log in</button> <button class="easy-button">Sign up</button>
    </div>
    <a href="#">Forget password</a>
    <alert></alert>
  </div>
</template>

<script>
import barTop from '../components/barTop.vue';
import card from '../components/card.vue';
import barBottom from '../components/barBottom.vue';
import alert from '../components/alert.vue';

export default {
  // components: {
  //   'bar-top': barTop,
  //   'card': card,
  //   'alert': alert,
  //   'bar-bottom': barBottom,
  // },
  methods:{

  }
}
</script>

<style>
       /* div {
        background-color: rgba(89, 207, 236, 0.699);
        padding: 20px;
        width: auto;
        height: auto;
    }

    p{
        font-size: 30px;
       color:white
    } */
    
    .login {
        align-items: flex-start;
        align-self: center;
        align-content: center;
        border-style: groove;
        border: 2px;
        border:rgb(243, 28, 28);
        align-items: center;
        background-color:  #19caad;
    }
    
 

    input{
        width:150px;
        margin: 5px;
    }

    input[type=password]{
        font: small-caption;
        font-size: 16px;
        width: 20;
    }

    .login > p {
        align-content: center;
    }

    a{
         text-decoration: underline;
    }

    button {
        width: 80px;
        margin: 5px;
    }

</style>
