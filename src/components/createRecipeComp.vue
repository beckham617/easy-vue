<template>
  <div class="create-recipe-comp">
    <md-field>
      <label>Recipe name</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field style="background:#1fdbbce1">
      <label>Description</label>
      <md-textarea v-model="textarea"></md-textarea>
    </md-field>
    
    

    <div  class="create-recipe-ingredients-section">
      <p class="create-recipe-title">Ingredients</p>

      <div class="create-recipe-ingredients-item">
        <md-field>
          <label>Servings</label>
          <md-input v-model="number" type="number"></md-input>
        </md-field>
      </div>
      <div class="create-recipe-ingredients">
        <div class="create-recipe-ingredients-item">
          <md-field >
            <label for="ingredient">Ingredient</label>
            <md-input name="ingredient" id="ingredient" />
          </md-field>
        </div>
        <div class="create-recipe-ingredients-item">
          <md-field >
            <label for="quantity">Quantity</label>
            <md-input name="quantity" id="quantity" />
          </md-field>
        </div>
      </div>
      <a class="create-recipe-ingredients-text" href="#" @click="addIngredients">Add ingredient</a>
    </div>
    <br/><br/>

    <div  class="create-recipe-ingredients-section">
        <p class="create-recipe-title">Preparation steps</p>

        <div class="create-recipe-ingredients">
          <div class="create-recipe-preparation-item">
            <md-button class="md-icon-button md-raised" style="color: black">
              <span class="media-object fa fa-plus fa-lg"></span>
            </md-button>
          </div>
          <div class="create-recipe-preparation-item">
            <md-field>
              <label>Description</label>
              <md-textarea v-model="textarea" md-autogrow="true"></md-textarea>
            </md-field>
          </div>
        </div>
        <a class="create-recipe-ingredients-text" href="#">Add steps</a>
    </div>

    <br/>
    <div class="login-comp-button">
      <md-button class="md-raised" @click="submit = true">Submit</md-button>
    </div>

    <md-dialog-alert
      :md-active.sync="submit"
      md-content="Your registration is successful!"
      md-confirm-text="OK!" 
      @click="toHome" />

    <!-- <alert :onDismiss="toLogin" alertTitle="Successful!"></alert> -->
  </div>
</template>

<script>
import barTop from '../components/barTop.vue';
import card from '../components/card.vue';
import barBottom from '../components/barBottom.vue';
import alert from '../components/alert.vue';

export default {
  name: 'DialogAlert,AnimationTypes',
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
        submit = true;
        // this.$store.commit("isShowAlert", true) 
      },
      toHome: function() { 
        this.$router.push("/home") }
      },
      addIngredients: function(){
        alert('addIngredients')
      }
}
</script>

<style>
    .create-recipe-title{
        align-self: center;
        font-family: 'Hind', sans-serif;
        /* font-family: 'Source Sans Pro', sans-serif; */
        font-size: 20px;
        color: black;
    }
    .create-recipe-comp {
        margin: 50px;
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
    .create-recipe-ingredients-section{
      padding: 10px;
      background-color:  #1fdbbce1;
    }

    .create-recipe-ingredients{
      display: flex;
      flex-wrap: nowrap;
    }
    .create-recipe-ingredients-item{
      width:50%;
      margin: 5px;
    }
    .create-recipe-ingredients-text{
        display: flex;
        /* justify-content: center; */
        font-family: 'Hind', sans-serif;
        /* font-family: 'Source Sans Pro', sans-serif; */
        font-size: 15px;
        color: rgb(255, 255, 255);
        text-decoration: underline;
    }

    .create-recipe-preparation-item{
      width:50%;
      margin: 5px;
      display: flex;
      height: 10vh;
      justify-content: center;
      align-items: center;
    }

</style>
