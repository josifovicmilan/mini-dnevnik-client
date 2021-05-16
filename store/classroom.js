export const state = () => ({
  classrooms : []    
  })
  
export const mutations = {
  loadClassrooms(state, data){
    state.classrooms = data.data
  },
  addClassroom(state, data){
    state.classrooms.push(data.data)
  },
  removeClassroom(state, data){
    state.classrooms = state.classrooms.filter(classroom => classroom.id != data.data.id)
  }

}
  
export const actions = {
  async loadClassrooms(context){
    await this.$axios.$get('/api/classrooms').
      then((response) => {
        context.commit('loadClassrooms', {
          data : response
        })
      })
  },
    async addClassroom(context, data){
      console.log(data);
      await this.$axios.$post("/api/classrooms",{
        type: data.type,
        year_started: data.year_started,
        classroom_number : data.classroom_number,
      }).then((response) => {
        context.commit('addClassroom', {
          data: response
        })
      })
    },
    async deleteClassroom(context,data){
      await this.$axios.$delete(`/api/classrooms/${data.id}`)
        .then(response => 
            {
              context.commit('removeClassroom', {
                data: response
              })
            }
          )
    }
}
export const getters = {
  classrooms : (state) => state.classrooms
}