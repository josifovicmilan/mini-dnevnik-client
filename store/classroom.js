export const state = () => ({
  classrooms : [],
  students: [],    
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
  },
  //STUDENTS
  loadStudents(state, data){
    state.students = data.data;
  },
  addStudent(state, data){
    state.students.push(data.data)
  },
  removeStudent(state, data){
    state.students = state.students.filter(student => student.id != data.data.id)
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
      try{

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
      }
      catch(e){
        console.log(e)
      }
    },
    async deleteClassroom(context,data){
      try{

        await this.$axios.$delete(`/api/classrooms/${data.id}`)
        .then(response => 
          {
            context.commit('removeClassroom', {
              data: response
            })
          }
          )
        }
        catch(e){
          console.log(e)
        }
    },
    //STUDENTS FOR CLASSROOM
    async loadStudents(context, data){
      await this.$axios.$get(`/api/classrooms/${data.id}/students`)
        .then(response => {
          context.commit('loadStudents', {
            data: response
          })
        })
    },
    async addStudent(context, data){
      try{

        await this.$axios.$post(`/api/classrooms/${data.id}/students`,{
          first_name: data.first_name,
          last_name : data.last_name,
          fathers_name : data.fathers_name,
          jmbg: data.jmbg
        }).then(response =>{
          context.commit('addStudent',{
            data: response
          })
        });
      }
      catch(e){
        console.log(e)
      }
    },
    async removeStudent(context, data){
      try{
        await this.$axios.$delete(`/api/classrooms/${data.classroom_id}/students/${data.id}`)
          .then(response => {
            context.commit('removeStudent', {
              data: response
            })
          })
      }
      catch(e){
        console.log(e)
      }
    }
}
export const getters = {
  classrooms : (state) => state.classrooms,
  students : (state) => state.students
}