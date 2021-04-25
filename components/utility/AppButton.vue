<template>
  <button :class="mode" class="flex items-center text-sm m-2 rounded-md shadow-xl transform focus:translate-y-1 ">
      <div :class="icon" class=" ml-2">
        <slot name="icon">
            
        </slot>  
      </div>
        <div class="px-2 py-2">{{ btnText }}</div>
      </button>
</template>

<script>
export default {
    props:['btnText', 'mode' , 'icon']
}
</script>

<style>

</style>