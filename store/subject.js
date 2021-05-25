export const state = () => ({
    allSubjects: [],
    userSubjects: [],    
    })
export const mutations = {
    loadAllSubjects(state, data){
        state.allSubjects = data.data
    },
    addSubject(state, data){
        state.allSubjects.push(data)
    },
    deleteSubject(state, data){
        state.allSubjects = state.allSubjects.filter(subject => subject.id != data.id)
    },
    loadUserSubjects(state, data){
        state.userSubjects = data.data
    },
    addUserSubject(state, data){
        state.userSubjects.push(data.data)
    }
}
export const actions = {
    async loadAllSubjects(context){
        
        try{
            await this.$axios.$get(`/api/subjects/`)
                .then(response => {
                    context.commit('loadAllSubjects', {
                        data : response
                    })
                });
        }
        catch(e){
            console.log(e)
        }
    },
    async loadUserSubjects(context,data){
        try{
            await this.$axios.$get(`/api/classrooms/${data.classroom_id}/subjects`)
                .then(response => {
                    context.commit('loadUserSubjects', response)
                })
        }
        catch(e){
            console.log(e)
        }
    },
    async addSubject(context, data){
        try{
            await this.$axios.$post(`/api/subjects`,{
                name: data.name,
                type: data.type
            }).then(response => {
                console.log(response)
                context.commit('addSubject', response)
            })
        }
        catch(e){
            
        }
    },
    async addUserSubject(context, data){
        try{
            await this.$axios.$post(`/api/classrooms/${data.classroom_id}/subjects`,{
                subject : data.subject,
            }).then(response => {
                context.commit('addUserSubject', {
                    data: response
                })
            })
        }
        catch(e){
            console.log(e)
        }
    },
    async deleteSubject(context, data){
        try{
            await this.$axios.$delete(`/api/subjects/${data.subject_id}`)
                .then(response => {
                    context.commit('deleteSubject', response)
                })
        }
        catch(e){
            console.log(e)
        }
    }
}
export const getters = {
    allSubjects : (state) => state.allSubjects,
    userSubjects: (state) => state.userSubjects
}