<template>
  <div class="">
  <div class="page flex flex-col md:flex-row">
    <app-sidebar>
      <app-button :class="'btn-green'" :btnText="'Додај одељење'" :icon="'icon-green'">
        <template #icon>
          <svg class="h-6 w-6  fill-current bg-white rounded-full stroke-current" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </template>
      </app-button>
    </app-sidebar>
    <div class="w-full flex flex-col sm:flex-row px-4 py-4 md:space-y-2 md:flex-col md:w-3/4 lg:flex-row lg:items-baseline ">
        <classroom-card></classroom-card>
        <classroom-card></classroom-card>
    </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from "@/components/layout/AppSidebar";
import ClassroomCard from "@/components/classroom/ClassroomCard";
import AppButton from "@/components/utility/AppButton";
export default {
  components:{
    AppSidebar,
    ClassroomCard,
    AppButton
  },
  
}
</script>
