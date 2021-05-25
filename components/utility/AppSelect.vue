<template>
  <div>
    {{ label }}
      <select name="" class="px-3 py-2 w-full border-blue-900 focus:border-2" :value="selectValue" @change="emitChange">
          <option value="">-- Изабери --</option>
          <option 
            v-for="option in options" 
            :value="option.id" 
            :key="option.value">
             
            {{option.value}}
          
          </option>
      </select>
  </div>
</template>

<script>
export default {
props:{
  options: {
    type: Array | Object,
    required: true
  },
  label:{
    type: String,
  },
  value:{
    required: true
  }
},
methods:{
  emitChange($event){
    this.$emit('input', $event.target.value)
  }
},
computed:{
  selectValue:{
    get(){
      return this.value;
    },
    set(value){
      this.value = value;
    }
  }
}
}
</script>

<style>

</style>