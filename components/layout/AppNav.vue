<template>
  <nav class="">
     
      <div >
          <nuxt-link to="/classrooms" class="bg-gray-700 flex py-2 px-4">
              <span class="text-gray-100 ml-2"> 
                <svg class="fill-current h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </span>
            <span class="text-gray-100 ml-2">Одељења</span>
          </nuxt-link>
      </div>

      <div >
        <nuxt-link class="bg-gray-700 flex py-2 px-4" to="/subjects"> 
            <span class="text-gray-100 ml-2"> 
                <svg class="fill-current h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </span>
            <span class="text-gray-100 ml-2">Предмети</span>
      </nuxt-link>
      </div>
       <div >
        <nuxt-link to="/profile" class="bg-gray-700 flex py-2 px-4">
            <div class="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
                <img src="http://source.unsplash.com/100x100/?girl" class="rounded-full">
            </div>
            <span>Миланче</span>
        </nuxt-link>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>