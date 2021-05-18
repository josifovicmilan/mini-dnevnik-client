<template>
  <app-container>
    <app-sidebar>
      <app-button 
        :class="'btn-green'" 
        :btnText="'Додај предмет'"
        @click.native="popupAddSubject = true"
        >
       
      </app-button>
    </app-sidebar>
    <app-list>
      <subject-card ></subject-card>
      <subject-card></subject-card>
      <subject-card></subject-card>
    </app-list>
    <subject-popup v-show="popupAddSubject" @closePopup="popupAddSubject = false"></subject-popup>
  </app-container>
</template>

<script>
import AppContainer from "@/components/layout/AppContainer";
import AppSidebar from "@/components/layout/AppSidebar";
import AppList from "@/components/layout/AppList";
import AppButton from "@/components/utility/AppButton";
import SubjectCard from "@/components/subject/SubjectCard";
import SubjectPopup from "@/components/subject/SubjectPopup";
export default {
  components:{
    AppContainer,
    AppSidebar,
    AppList,
    AppButton,
    SubjectCard,
    SubjectPopup
  },
  data(){
    return{
      popupAddSubject: false
    }
  }
}
</script>

<style>

</style>