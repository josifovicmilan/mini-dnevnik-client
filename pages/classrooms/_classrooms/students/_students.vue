<template>
  <app-container>
    <app-sidebar >
      <app-button :class="'btn-green'" :btnText="'Додај личне податке'" :icon="'icon-green'">
        <template #icon>
          <svg class="h-6 w-6  fill-current bg-white rounded-full stroke-current" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </template>
      </app-button>
      <app-button :class="'btn-green'" :btnText="'Додај оцене ученика'" :icon="'icon-green'">
        <template #icon>
          <svg class="h-6 w-6  fill-current bg-white rounded-full stroke-current" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </template>
      </app-button>
      <app-button :class="'btn-green'" :btnText="'Додај податке о сведочанству'" :icon="'icon-green'">
        <template #icon>
          <svg class="h-6 w-6  fill-current bg-white rounded-full stroke-current" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </template>
      </app-button>
      <app-button :class="'btn-green'" :btnText="'Додај податке о завршном испиту'" :icon="'icon-green'">
        <template #icon>
          <svg class="h-6 w-6  fill-current bg-white rounded-full stroke-current" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </template>
      </app-button>
    </app-sidebar>
    <app-grid>
      <div class="w-full grid">
        <student-personal class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"></student-personal>
        <student-marks class="col-span-12 sm:col-span-6 md:col-span-8 lg:col-start-4 lg:col-span-8"></student-marks>
        <student-certificate class="col-span-12 md:col-span-8 "></student-certificate>
        <student-final-exam class="col-span-12 md:col-start-9 md:col-span-4 "></student-final-exam>
      </div>
    </app-grid>
  </app-container>
</template>

<script>
import AppContainer from "@/components/layout/AppContainer";
import AppGrid from "@/components/layout/AppGrid";
import AppCard from "@/components/layout/AppCard";
import AppSidebar from "@/components/layout/AppSidebar";
import AppButton from "@/components/utility/AppButton";
import StudentPersonal from "@/components/student/StudentPersonal";
import StudentMarks from "@/components/student/StudentMarks";
import StudentCertificate from "@/components/student/StudentCertificate";
import StudentFinalExam from "@/components/student/StudentFinalExam";
export default {
  components:{
    AppContainer,
    AppCard,
    AppGrid,
    AppSidebar,
    AppButton,
    StudentPersonal,
    StudentMarks,
    StudentCertificate,
    StudentFinalExam    
  }
}
</script>

<style>

</style>