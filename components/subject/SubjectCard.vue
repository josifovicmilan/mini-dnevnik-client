<template>
  <div draggable
         @dragstart="startDrag($event, subject)"
         @dragover="onDragOver2"
         @dragleave="onDragLeave"
         @dragenter="onDragEnter"
         @dragend="onDragEnd"
         @drop="onDrop"
          class="flex flex-col  border shadow-sm rounded-xl overflow-hidden m-2 h-14"
          :class="{'border-dashed shadow-xl border-gray-800 ' : addDropEffect}"
          >
      <div class="h-6 bg-gray-300 ">
        <div class="flex items-center justify-end text-gray-600" @click="deleteSubject">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 m-1 fill-current cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
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
        <div class="flex-1 ml-2 text-gray-500">{{ subject.position }}. {{ subject.name }}</div>
        
        <div class="text-gray-500">{{ subject.type }}</div>
      </div>
      
  </div>
</template>

<script>
export default {
props:['subject'],
data(){
  return{
    addDropEffect: false
  }
},
methods:{
  deleteSubject(){

    return this.$store.dispatch('subject/deleteSubject', {
      subject_id : this.subject.id
    })
  },
  startDrag(event, subject){
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('subject_id', subject.id)

    },
    onDrop(event){
      this.addDropEffect = false;
      console.log(this.subject.id)
      console.log(event.dataTransfer.getData('subject_id'))
      this.$store.dispatch('subject/updatePosition',{
        'subject1_id' : event.dataTransfer.getData('subject_id'),
        'subject2_id' : this.subject.id
      });
    },
    onDragOver2(){
      this.addDropEffect = true;
    },
    onDragLeave(){
      console.log('drag leave')
      this.addDropEffect = false;
    },
    onDragEnd(){
      this.addDropEffect = false;
    },
    onDragEnter(){
      this.addDropEffect = true;
      console.log('dragENter')
    }
}
}
</script>

<style>

</style>