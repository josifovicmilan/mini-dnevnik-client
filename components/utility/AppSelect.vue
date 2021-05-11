<template>
  <div>
    {{ label }}
      <select name="" id="" class="px-3 py-2 w-full border-blue-900 focus:border-2 ">
          <option 
            :value="option.value" 
            v-for="option in options" 
            :key="option.value">
             
            {{option.name}}
          
          </option>
      </select>
  </div>
</template>

<script>
export default {
props:['label', 'options']
}
</script>

<style>

</style>