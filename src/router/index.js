import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/login.vue';
import Home from '../views/home.vue';
import Search from '../views/search.vue';
import Lists from '../views/lists.vue';
import Option from '../views/option.vue';
import Detail from '../views/detail.vue';
import Register from '../views/register.vue';
import CreateRecipe from '../views/createRecipe.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
  { path: '/search', component: Search },
  { path: '/lists', component: Lists },
  { path: '/option', component: Option },
  { path: '/detail', component: Detail },
  { path: '/register', component: Register },
  { path: '/createRecipe', component: Register },
];

const router = new VueRouter({routes});

export default router;
