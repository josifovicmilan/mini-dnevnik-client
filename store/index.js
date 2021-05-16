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
}
