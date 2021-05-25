<template>
  
    <app-container>
      <app-sidebar>
        <app-button 
         :class="'btn-green'"
         :btnText="'Додај ученика'"
         :icon="'icon-green'"
         @click.native="popupAddStudent = true"
         >
        </app-button>
      <nuxt-link class="text-sm   mx-4" :to="`/classrooms/${$route.params.classrooms}/subjects`"> <span class=" pb-1 border-b border-gray-100">Листа предмета</span></nuxt-link>
      </app-sidebar>
      <app-list>
        <app-spinner v-if="!students"></app-spinner>
        <student-card v-else v-for="student in students" :key="student.id" :student="student"></student-card>
        
      </app-list>    
      <student-popup v-show="popupAddStudent" @closePopup="popupAddStudent = false"></student-popup>
    </app-container>
  
</template>

<script>
import AppSpinner from "@/components/layout/AppSpinner";
import AppContainer from "@/components/layout/AppContainer";
import AppSidebar from "@/components/layout/AppSidebar";
import AppList from "@/components/layout/AppList";
import AppButton from "@/components/utility/AppButton";
import StudentPopup from "@/components/student/StudentPopup";
export default {
  components:{
    AppContainer,
    AppSidebar,
    AppList,
    AppButton,
    StudentPopup,
    AppSpinner
  },
  data(){
    return{
      popupAddStudent : false
    }
  },
  mounted(){
    //console.log(this.$route.params.classrooms);
      return this.$store.dispatch('classroom/loadStudents', {
        id: this.$route.params.classrooms
      });
  },
  computed:{
    students(){
      return this.$store.getters['classroom/students'];
    }
  },
}
</script>

<style>

</style>