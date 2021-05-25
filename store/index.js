export const state = () => ({
 
})

export const mutations = {

}

export const actions = {
  
  
  async login(context, data) {
    console.log(data);
    await this.$auth
      .loginWith("laravelSanctum", {
        data:{
          email: data.email,
          password: data.password
        }
      })
      .then((response) => {
        console.log(context);
      });
  },
  async logout(context) {
    //console.log("usao u log out");
    await this.$auth.logout();
  },
  async register(context, data){
    try{
      await this.$axios.$get('/sanctum/csrf-cookie')
      await this.$axios.$post('/api/users/register',{
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation : data.password_confirmation
      }).then(response => 
        {
          this.$auth.loginWith("laravelSanctum",{
            data:{
              email:data.email,
              password: data.password
            }
          })
        })
    }
    catch(e){
      console.log(e)
    }
  }
}
