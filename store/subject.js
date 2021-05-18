export const state = () => ({
    allSubjects: [],    
    })
export const mutations = {
    loadAllSubjects(state, data){
        console.log(data.data)
        state.allSubjects = data.data
    }
}
export const actions = {
    async loadAllSubjects(context){
        
        try{
            await this.$axios.$get(`/api/subjects/`)
                .then(response => {
                    console.log(response)
                    context.commit('loadAllSubjects', {
                        data : response
                    })
                });
        }
        catch(e){
            console.log(e)
        }
    },
    async addUserSubject(context, data){
        try{

        }
        catch(e){
            
        }
    }
}
export const getters = {
    allSubjects : (state) => state.allSubjects
}