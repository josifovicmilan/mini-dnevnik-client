<template>
  <div>
    <div class="page flex flex-col md:flex-row">
    <app-sidebar>
      <app-button :class="'btn-green'" :btnText="'Додај ученика'" :icon="'icon-green'">
        <template #icon>
          <svg class="h-6 w-6  fill-current bg-white rounded-full stroke-current" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </template>
      </app-button>
    </app-sidebar>
    <app-container>
      <student-card></student-card>
      <student-card></student-card>
      <student-card></student-card>
    </app-container>
    </div>
  </div>
</template>

<script>
import AppSidebar from "@/components/layout/AppSidebar";
import AppContainer from "@/components/layout/AppContainer";
import AppButton from "@/components/utility/AppButton";
export default {
  components:{
    AppSidebar,
    AppContainer,
    AppButton
  }
}
</script>

<style>

</style>