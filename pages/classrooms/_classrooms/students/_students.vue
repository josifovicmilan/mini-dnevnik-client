<template>
  <div class="grid grid-cols-12 md:grid-rows-3 lg:grid-rows-2">
    <app-sidebar class="col-span-full  h-10 md:col-span-3 md:h-full md:row-span-full lg:col-span-2">
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
    <student-personal class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"></student-personal>
    <student-marks class="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-7"></student-marks>
    <student-certificate class="col-span-12 md:col-start-4 md:col-span-9 lg:col-span-6"></student-certificate>
    <student-final-exam class="col-span-12 md:col-start-4 md:col-span-9 lg:col-span-4"></student-final-exam>
  </div>
</template>

<script>
import AppCard from "@/components/layout/AppCard";
import AppSidebar from "@/components/layout/AppSidebar";
import AppButton from "@/components/utility/AppButton";
import StudentPersonal from "@/components/student/StudentPersonal";
import StudentMarks from "@/components/student/StudentMarks";
import StudentCertificate from "@/components/student/StudentCertificate";
import StudentFinalExam from "@/components/student/StudentFinalExam";
export default {
  components:{
    AppCard,
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