<template>
  <div class="">
    <app-header @toggleNav="toggleNav"></app-header>
    <app-nav v-show="navVisibility"></app-nav>
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader';
import AppNav from '@/components/layout/AppNav';

export default {
  components:{
    AppHeader,
    AppNav
  },
  data(){
    return{
      navVisibility: false
    }
  },
  methods:{
    toggleNav(){
      this.navVisibility = !this.navVisibility;
    }
  }
}
</script>


