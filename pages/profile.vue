<template>
  <div>
    <div v-if="$auth.loggedIn">
      hello
      <button @click="logout"> logout </button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['authenticated'],
  methods:{
    logout(){
      this.$store.dispatch('logout')
        .then(() => this.$router.push('/'));
    }
  }
}
</script>

<style>

</style>