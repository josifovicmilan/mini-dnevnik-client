<template>
  <app-container>
    <app-sidebar>
      <app-button 
        :class="'btn-green flex-shrink-0'" 
        :btnText="'Додај одељење'" 
        :icon="'icon-green'"
        @click.native="popupAddClassroom = !popupAddClassroom"
        >
        <template #icon>
          
        </template>
      </app-button>
    </app-sidebar>
    <app-grid>
      <classroom-card></classroom-card>
      <classroom-card></classroom-card>
      <classroom-card></classroom-card>
    </app-grid>
    <classroom-popup v-show="popupAddClassroom" @closePopup="popupAddClassroom = false"></classroom-popup>
    </app-container>
</template>

<script>
// variables/variables.js

import AppContainer from "@/components/layout/AppContainer";
import AppSidebar from "@/components/layout/AppSidebar";
import AppGrid from "@/components/layout/AppGrid";
import ClassroomPopup from "@/components/classroom/ClassroomPopup";
import ClassroomCard from "@/components/classroom/ClassroomCard";
import AppButton from "@/components/utility/AppButton";
export default {
  middleware: 'auth',
  auth: true,
  data(){
    return{
      popupAddClassroom: false,
    }
  },
  components:{
    AppContainer,
    AppSidebar,
    AppGrid,
    ClassroomPopup,
    ClassroomCard,
    AppButton
  },
  methods:{

  },
  async asyncData({store}){
      store.dispatch('loadClassrooms');
  },
  computed:{
    loadClassrooms(){
      //return this.$store.
    }
  },
  
}
</script>
