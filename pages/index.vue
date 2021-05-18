<template>
  <div class="w-screen fixed top-0 left-0 min-h-screen bg-gray-800 flex justify-center items-center z-0">
    <div class="mx-2 py-4 bg-gray-200 w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-md">
      <div>
        <div class="mx-1 border-2 mt-2">
          <label for="email" class="text-xs text-gray-800">Емаил</label>
          <app-input :type="'text'" :name="email" v-model="email"></app-input>
        </div>
        <div class="mx-1 border-2 mt-2">
          <label for="password" class="text-xs text-gray-800">Лозинка</label>
           <app-input :type="'password'" :name="password" v-model="password"></app-input>
        </div>
        <div class="mx-1 border-2 mt-2 flex justify-end">
           <app-button :class="'btn-green'" :btnText="'Пријави се'" @click.native="attemptLogin"></app-button>
        </div>
        <div>немате налог? кликни <nuxt-link to="/register">овде</nuxt-link> за нови налог</div>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from "@/components/utility/AppInput";
import AppButton from "@/components/utility/AppButton";
export default {
  middleware: 'guest',
  components:{
    AppInput,
    AppButton
  },
  data(){
    return{
      email:'admin@test.com',
      password:'password',
    }
  },
  methods:{
    attemptLogin(){
      this.$store.dispatch('login',{
        email:this.email,
        password: this.password
      }).then(()=> this.$router.push('profile'));
    }
  }
}
</script>
