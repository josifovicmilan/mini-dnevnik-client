<template>
  <div>
    <div v-if="$auth.loggedIn">
      hello
      <button @click="logout"> logout </button>
      <app-spinner></app-spinner>
    </div>
  </div>
</template>

<script>
import AppSpinner from "@/components/layout/AppSpinner";
export default {
  middleware: ['authenticated'],
  methods:{
    logout(){
      this.$store.dispatch('logout')
        .then(() => this.$router.push('/'));
    }
  },
  components:{
    AppSpinner
  }
}
</script>

<style>

</style>