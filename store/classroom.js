export const state = () => ({
    
  })
  
export const mutations = {

}
  
export const actions = {

    async addClassroom(context, data){
      console.log(data);
      await this.$axios.$post("/api/classrooms",{

      })
    }
}