export const state = () => ({
    student: {},    
    marks: {},

    })
    
  export const mutations = {
    loadStudent(state, data){
        state.student = data.data
    }
  }
    
  export const actions = {
    async loadStudent(context, data){
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
    },
    async loadMarks(context){
        try{
            await this.$axios.$get(`/api/students/${data.id}/marks`)
                .then(response =>{
                    console.log(response)
                })
        }
        catch(e){
            console.log(e)
        }
    },
    async addStudentMarks(context, data){
        console.log('data')
    }
  }
  export const getters = {
    // classrooms : (state) => state.classrooms,
     student : (state) => state.student
  }