<template>
  <div class="w-screen min-h-screen bg-gray-800 flex justify-center items-center">
    <div class="mx-2 py-4 bg-gray-200 w-4/5 sm:w-1/2 md:w-1/4 rounded-md">
      <form class="flex flex-col">
        <div class="mx-1 border-2 mt-2">
          <label for="email" class="text-xs text-gray-800">Емаил</label>
           <input class="w-full border-gray-700 h-8 rounded-md pl-2 outline:none focus:border focus:border-gray-800" type="text" name="email">
        </div>
        <div class="mx-1 border-2 mt-2">
          <label for="password" class="text-xs text-gray-800">Лозинка</label>
           <input class="w-full border-gray-700 h-8 rounded-md pl-2 outline:none focus focus:border-gray-800" type="password">
        </div>
        <div class="mx-1 border-2 mt-2">
           <button class="bg-green-700 text-white hover:bg-gray-600 py-2 px-4 rounded-md w-full sm:w-30">Пријави се</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>
