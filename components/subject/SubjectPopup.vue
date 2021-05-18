<template>
  <app-popup @closePopup="$emit('closePopup')">
        <div class="p-2">
            <label for="">Изабери предмете</label>
            <app-select v-model="subject"  :name="'subject'" :options="allSubjects"></app-select>
        </div>
     
        <div class="flex items-center justify-end py-3 px-2">
            <app-button :mode="'btn-blue'" :btn-text="'Додај предмет'" @click.native="addSubject"></app-button>
        </div>
            
  </app-popup>
</template>

<script>
import AppPopup from "@/components/popup/AppPopup";
import AppInput from "@/components/utility/AppInput";
import AppSelect from "@/components/utility/AppSelect";
import AppButton from "@/components/utility/AppButton";
export default {
    data(){
        return{
            subject: null
        }
    },
    components:{
        AppPopup,
        AppInput,
        AppButton,
        AppSelect
        
    },
    mounted(){
        return this.$store.dispatch('subject/loadAllSubjects');
    },
    computed:{
        allSubjects(){
            return this.$store.getters['subject/allSubjects'];
        }
    },
    methods:{
        addSubject(){
            return this.$store.dispatch('subject/addUserSubject');
        }
    }
}
</script>

<style>

</style>