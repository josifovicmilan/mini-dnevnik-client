<template>
  <div class="">
    <app-header @click.native="toggleNav"></app-header>
    <app-nav v-show="navVisibility"></app-nav>
  <div class="page flex flex-col md:flex-row">
    <app-sidebar></app-sidebar>
    <div class="w-full md:w-3/4 flex flex-col sm:flex-row md:flex-col md:items-center lg:flex-row lg:items-baseline">
        <app-card></app-card>
        <app-card></app-card>
    </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppNav from "@/components/layout/AppNav";
import AppSidebar from "@/components/layout/AppSidebar";
import AppCard from "@/components/layout/AppCard";
export default {
  components:{
    AppHeader,
    AppNav,
    AppSidebar,
    AppCard
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
