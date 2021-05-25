<template>
   <div class="w-screen fixed top-0 left-0 min-h-screen bg-gray-800 flex justify-center items-center z-0">
    <div class="mx-2 py-4 bg-gray-200 w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-md">
      <div>
        <div class="mx-1 border-2 mt-2">
          <label for="name" class="text-xs text-gray-800">Име и презиме</label>
          <app-input :type="'text'" :name="name" v-model="name"></app-input>
        </div>
        <div class="mx-1 border-2 mt-2">
          <label for="email" class="text-xs text-gray-800">Емаил</label>
          <app-input :type="'text'" :name="email" v-model="email"></app-input>
        </div>
        <div class="mx-1 border-2 mt-2">
          <label for="password" class="text-xs text-gray-800">Лозинка</label>
           <app-input :class="{'error' : error}" :type="'password'" :name="password" v-model="password"></app-input>
        </div>
         <div class="mx-1 border-2 mt-2">
          <label for="password_confirmation" class="text-xs text-gray-800">Потврди лозинку</label>
           <app-input :class="{'error' : error}" :type="'password'" :name="'password_confirmation'" v-model="password_confirmation"></app-input>
        </div>
        <div class="mx-1 border-2 mt-2 flex justify-end">
           <app-button :class="'btn-green'" :btnText="'Направи налог'" @click.native="createUser"></app-button>
        </div>
        <div  class="flex items-center justify-center mt-4">
          <div class=" text-sm ">Имате налог? Kликни <nuxt-link to="/" class="border-b border-blue-900 pb-1 text-blue-800">овде</nuxt-link> за логин.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/utility/AppButton";
import AppInput from "@/components/utility/AppInput";
export default {
  components:{
    AppButton,
    AppInput
  },
  data(){
    return{
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      error: false
    }
  },
  methods:{
    createUser(){
      console.log('usao')
      if(this.password !== this.password_confirmation){
        this.error = true;
        return
      }
      else{
        this.error = false
        this.$store.dispatch('register',{
          name: this.name,
          email: this.email,
          password : this.password,
          password_confirmation : this.password_confirmation
        })
      }
    }
  }
}
</script>

<style>
.error{
  border: 2px solid red;
}
</style>