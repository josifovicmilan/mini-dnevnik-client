<template>
  <div class="mt-4 mx-2 border flex flex-col rounded-xl shadow-lg overflow-hidden md:w-5/6 md:mx-4 sm:w-1/2 lg:w-1/2">
        <div class="h-6 bg-gray-300 "></div>
        <div class="flex flex-col mx-2 my-2">
            <div>
                  <div class="flex justify-between">
                    <span class="mr-4">Уписано:</span> 
                    <span class="text-gray-700 flex-shrink-0">2020</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="mr-4">Индекс:</span> 
                    <span class="text-gray-700 flex-shrink-0">8</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="mr-4">Тип:</span> 
                    <span class="text-gray-700 flex-shrink-0">природно-математички смер</span>
                  </div>
            </div>
            <div class="flex-shrink-0 flex justify-end ml-8 mt-4">
              <div class="">
                <button class="flex px-2 py-1 border-2 hover:bg-green-50 hover:shadow-md border-green-500 rounded-md cursor-pointer">
                  <svg class="text-green-500 mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span class="text-green-500  font-semibold">приступи</span>
                </button>
              </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>