<template>
  <div class="flex flex-col border shadow-xl rounded-xl overflow-hidden w-full">
      <div class="h-8 bg-gray-300 ">
          <div class="flex items-center justify-end text-gray-600" @click="removeStudent">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-2 fill-current cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>  
        </div>
      </div>
      <div class="flex justify-between mx-2 my-1">
        <div class="flex-shrink-0">
            <svg class="cursor-pointer w-6 h-6 text-gray-500" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </div>
        <div class="flex-1 ml-2 text-gray-500">1. {{ student.first_name }} {{ student.last_name }}</div>
        
        <div class="flex">
            <nuxt-link :to="`/classrooms/${student.classroom_id}/students/${student.id}`">
                <svg class="w-6 h-6  text-white bg-green-500 stroke-2 rounded-md cursor-pointer m-1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </nuxt-link>
           
        </div>
      </div>
  </div>
</template>

<script>
export default {
props:['student'],
methods:{
    removeStudent(){
        console.log('usao')
        return this.$store.dispatch('classroom/removeStudent',{
            classroom_id : this.student.classroom_id,
            id: this.student.id
        })
    }
}
}
</script>

<style>

</style>