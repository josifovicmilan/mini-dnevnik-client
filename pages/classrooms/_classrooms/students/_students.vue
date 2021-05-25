<template>
  <app-container>
    <app-sidebar >
      <app-button 
        :class="'btn-green'" 
        :btnText="'Додај личне податке'"
        @click.native="popupAddPersonalData = true"
        >
       
      </app-button>
      <app-button 
        :class="'btn-green'" 
        :btnText="'Додај оцене ученика'"
        @click.native="popupAddMarks = true"
      >
        
      </app-button>
      <app-button 
        :class="'btn-green'" 
        :btnText="'Додај податке о сведочанству'"
        @click.native="popupAddAdditional = true"
      >
     
      </app-button>
      <app-button 
        :class="'btn-green'" 
        :btnText="'Додај податке о завршном испиту'"
        @click.native="popupAddFinalExam = true"
      >
    
      </app-button>
    </app-sidebar>
    <app-grid>
      <app-spinner v-if="!student"></app-spinner>
      <div v-else class="w-full grid">
        <student-personal :student="student" class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"></student-personal>
        <student-marks class="col-span-12 sm:col-span-6 md:col-span-8 lg:col-start-4 lg:col-span-8"></student-marks>
        <student-certificate class="col-span-12 md:col-span-8 "></student-certificate>
        <student-final-exam class="col-span-12 md:col-start-9 md:col-span-4 "></student-final-exam>
      </div>
    </app-grid>
    <student-personal-popup
       v-show="popupAddPersonalData === true"
      @closePopup="popupAddPersonalData = false"
       ></student-personal-popup>
    <student-marks-popup
       v-show="popupAddMarks === true"
       @closePopup="popupAddMarks = false"
       ></student-marks-popup>
  </app-container>
</template>

<script>
import AppSpinner from "@/components/layout/AppSpinner";
import AppContainer from "@/components/layout/AppContainer";
import AppGrid from "@/components/layout/AppGrid";
import AppCard from "@/components/layout/AppCard";
import AppSidebar from "@/components/layout/AppSidebar";
import AppButton from "@/components/utility/AppButton";
import StudentPersonal from "@/components/student/StudentPersonal";
import StudentMarks from "@/components/student/StudentMarks";
import StudentCertificate from "@/components/student/StudentCertificate";
import StudentFinalExam from "@/components/student/StudentFinalExam";
import StudentPersonalPopup from "@/components/student/StudentPersonalPopup";
import StudentMarksPopup from "@/components/student/StudentMarksPopup";
export default {
  middleware:['authenticated'],
  components:{
    AppContainer,
    AppCard,
    AppGrid,
    AppSidebar,
    AppButton,
    StudentPersonal,
    StudentMarks,
    StudentCertificate,
    StudentFinalExam,
    StudentPersonalPopup,
    StudentMarksPopup,
    AppSpinner
  },
  data(){
    return{
      popupAddPersonalData: false,
      popupAddMarks : false,
      popupAddAdditional: false,
      popupAddFinalExam : false,
    }
  },
  mounted(){
    
    return this.$store.dispatch('student/loadStudent', {
            id: this.$route.params.students
    });
  },
  computed:{
    student(){
      return this.$store.getters['student/student'] ?? null;
    }
  },
}
</script>

<style>

</style>