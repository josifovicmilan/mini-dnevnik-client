<template>
  <app-popup @closePopup="$emit('closePopup')">
        <div class="p-2">
            <label for="">Име ученика</label>
            <app-input v-model="firstName" :type="'input'" :name="'firstName'"></app-input>
        </div>
        <div class="p-2">
            <label for="">Презиме ученика</label>
            <app-input v-model="lastName" :type="'input'" :name="'lastName'"></app-input>
        </div>
        <div class="p-2">
            <label for="">Име оца</label>
            <app-input v-model="fathersName" :type="'input'" :name="'fathersName'"></app-input>
        </div>
        <div class="p-2">
            <label for="">ЈМБГ</label>
            <app-input v-model="jmbg" :type="'input'" :name="'jmbg'"></app-input>
        </div>
        <div class="flex items-center justify-end py-3 px-2">
            <app-button :mode="'btn-blue'" :btn-text="'Додај ученика'" @click.native="addStudent"></app-button>
        </div>
            
  </app-popup>
</template>

<script>
import {classroomTypes} from "~/variables/classroomTypes.js";
import {classroomNumbers} from "~/variables/classroomNumbers.js";
import AppPopup from "@/components/popup/AppPopup";
import AppInput from "@/components/utility/AppInput";
import AppSelect from "@/components/utility/AppSelect";
import AppButton from "@/components/utility/AppButton";


export default {
    data(){
        return{
            firstName: '',
            lastName: '',
            fathersName: '',
            jmbg: '',
        }
    },
    components:{
        AppPopup,
        AppInput,
        AppButton,
        AppSelect
    },
    
    methods:{
        addStudent(){
            return this.$store.dispatch('classroom/addStudent',{
                first_name : this.firstName,
                last_name : this.lastName,
                fathers_name: this.fathersName,
                jmbg: this.jmbg,
                id: this.$route.params.classrooms
            }).then(response =>{
                this.classroomType = '';
                this.classroomYear = '';
                this.classroomNumber = '';
                this.$emit('closePopup');
            });
        }
    }
}
</script>

<style>

</style>