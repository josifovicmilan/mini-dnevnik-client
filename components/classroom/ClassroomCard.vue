<template>
  <div class="border mt-4 flex flex-col rounded-xl shadow-lg overflow-hidden m-2 min-h-40 lg:w-1/3">
        <div class="h-8 bg-gray-300 ">
          <div class="flex items-center justify-end text-gray-600" @click="deleteClassroom">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-2 fill-current cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>  
        </div>
        </div>
        <div class="flex flex-col mx-2 my-2">
            <div>
                  <div class="flex justify-between">
                    <span class="mr-4">Уписано:</span> 
                    <span class="text-gray-700 flex-shrink-0">{{ classroom.year_started }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="mr-4">Индекс:</span> 
                    <span class="text-gray-700 flex-shrink-0">{{ classroom.classroom_number }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="mr-4">Тип:</span> 
                    <span class="text-gray-700 flex-shrink-0">{{ classroom.type }}</span>
                  </div>
            </div>
            <div class="flex-shrink-0 flex justify-end ml-8 mt-4">
              <div class="">
                <nuxt-link :to="`/classrooms/${classroom.id}`" class="flex px-2 py-1 border-2 hover:bg-green-50 hover:shadow-md border-green-500 rounded-md cursor-pointer">
                  <svg class="text-green-500 mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span class="text-green-500  font-semibold">приступи</span>
                </nuxt-link>
              </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
props:['classroom'],
methods:{
  deleteClassroom(){
    return this.$store.dispatch('classroom/deleteClassroom', {
      id: this.classroom.id
    })
  }
}
}
</script>

<style>

</style>