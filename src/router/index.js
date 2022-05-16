import Vue from 'vue'
import VueRouter from 'vue-router'
import MedicinesComponent from '../components/MedicinesComponent.vue'
import PatientsComponent from  '../components/PatientsComponent.vue'
import HomeComponent from '../components/HomeComponent.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      name: 'HomeComponent',
      component: HomeComponent,
    },
    {
      path:'/patients',
      name: 'PatientsComponent',
      component: PatientsComponent,
    },
    {
      path: '/medicines',
      name: 'MedicinesComponent',
      component: MedicinesComponent,
    }
  ]
});
export default router;