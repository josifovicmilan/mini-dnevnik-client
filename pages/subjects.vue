<template>
  <app-container>
    <app-sidebar>     
      
        <app-button 
          v-if="$auth.user.user.admin === true"
          :class="'btn-green'" 
          :btnText="'Додај предмет у базу'"
          @click.native="popupAdminAddSubject = true"
        >
       
      </app-button>
    </app-sidebar>


    <app-list>
      <app-spinner v-if="!allSubjects"></app-spinner>
      <subject-card v-else v-for="subject in allSubjects" :key="subject.id" :subject="subject"></subject-card>
    </app-list>
    
    <admin-subject-popup v-show="popupAdminAddSubject" @closePopup="popupAdminAddSubject = false"></admin-subject-popup>
  </app-container>
</template>

<script>
import AppContainer from "@/components/layout/AppContainer";
import AppSidebar from "@/components/layout/AppSidebar";
import AppList from "@/components/layout/AppList";
import AppButton from "@/components/utility/AppButton";
import SubjectCard from "@/components/subject/SubjectCard";
import SubjectPopup from "@/components/subject/SubjectPopup";
import AdminSubjectPopup from "@/components/admin/AdminSubjectPopup";
import AppSpinner from "@/components/layout/AppSpinner";
export default {
  
  middleware:['authenticated'],
  components:{
    AppContainer,
    AppSidebar,
    AppList,
    AppButton,
    SubjectCard,
    SubjectPopup,
    AdminSubjectPopup,
    AppSpinner,
  },
  data(){
    return{
      popupAddSubject: false,
      popupAdminAddSubject: false
    }
  },
  created(){
        return this.$store.dispatch('subject/loadAllSubjects');
    },
  computed:{
      allSubjects(){
          return this.$store.getters['subject/allSubjects'] ?? {};
      }
  },
}
</script>

<style>

</style>