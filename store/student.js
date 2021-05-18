export const state = () => ({
    student: undefined,    
    })
    
  export const mutations = {
    loadStudent(state, data){
        state.student = data.data
    }
  }
    
  export const actions = {
    async loadStudent(context, data){
        console.log(data)
        try{
            await this.$axios.$get(`/api/students/${data.id}`)
                .then(response => {
                    context.commit('loadStudent', {
                        data : response
                    })
                });
        }
        catch(e){
            console.log(e)
        }
    }
  }
  export const getters = {
    // classrooms : (state) => state.classrooms,
     student : (state) => state.student
  }