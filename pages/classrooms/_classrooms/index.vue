<template>
  
    <app-container>
      <app-sidebar>
        <app-button :class="'btn-green'" :btnText="'Додај ученика'" :icon="'icon-green'">
          <template #icon>
            <svg class="h-6 w-6  fill-current bg-white rounded-full stroke-current" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </template>
        </app-button>
      </app-sidebar>
      <app-list>
        <student-card></student-card>
        <student-card></student-card>
        <student-card></student-card>
        
      </app-list>    
    </app-container>
  
</template>

<script>
import AppContainer from "@/components/layout/AppContainer";
import AppSidebar from "@/components/layout/AppSidebar";
import AppList from "@/components/layout/AppList";
import AppButton from "@/components/utility/AppButton";
export default {
  components:{
    AppContainer,
    AppSidebar,
    AppList,
    AppButton
  }
}
</script>

<style>

</style>