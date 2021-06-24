<template>
  <app-container>
    <app-sidebar>
      <app-button 
        :class="'btn-green'" 
        :btnText="'Додај предмет за одељење'"
        @click.native="popupAddSubject = true"
        >
      </app-button>
           
    </app-sidebar>
    <app-list > 
      <div
         @drop="onDrop($event)"
        @dragover.prevent 
        @dragenter.prevent
        >

      <app-spinner v-if="!subjects"></app-spinner>
      <subject-card
         v-else 
         v-for="subject in subjects"
         :key="subject.id"
         :subject="subject"
         
         >
        </subject-card>
      </div>
    </app-list>
    <subject-popup v-show="popupAddSubject" @closePopup="popupAddSubject = false"></subject-popup>
  </app-container>
</template>

<script>
import AppSpinner from "@/components/layout/AppSpinner";
import AppContainer from "@/components/layout/AppContainer";
import AppSidebar from "@/components/layout/AppSidebar";
import AppList from "@/components/layout/AppList";
import AppButton from "@/components/utility/AppButton";
import SubjectCard from "@/components/subject/SubjectCard";
import SubjectPopup from "@/components/subject/SubjectPopup";
import AdminSubjectPopup from "@/components/admin/AdminSubjectPopup";
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
    AppSpinner
  },
  data(){
    return{
      popupAddSubject: false,
      addDropEffect: false
    }
  },
  mounted(){
    return this.$store.dispatch('subject/loadUserSubjects',{
      classroom_id: this.$route.params.classrooms
    });
  },
  methods:{
    onDrop(event){
      console.log(event.dataTransfer.getData('subject'))
      
    },
  },
  computed:{
    subjects(){
      return this.$store.getters['subject/userSubjects'];
    }
  }
}
</script>

<style>

</style>