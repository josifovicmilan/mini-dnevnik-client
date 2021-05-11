<template>
  <app-container>
    <app-sidebar>
      <app-button :class="'btn-green'" :btnText="'Додај предмет'" :icon="'icon-green'">
        <template #icon>
          <svg class="h-6 w-6  fill-current bg-white rounded-full stroke-current" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </template>
      </app-button>
    </app-sidebar>
    <app-list>
      <subject-card ></subject-card>
      <subject-card></subject-card>
      <subject-card></subject-card>
    </app-list>
  </app-container>
</template>

<script>
import AppContainer from "@/components/layout/AppContainer";
import AppSidebar from "@/components/layout/AppSidebar";
import AppList from "@/components/layout/AppList";
import AppButton from "@/components/utility/AppButton";
import SubjectCard from "@/components/subject/SubjectCard";
export default {
  components:{
    AppContainer,
    AppSidebar,
    AppList,
    AppButton,
    SubjectCard
  }
}
</script>

<style>

</style>