<template>
  <app-popup @closePopup="$emit('closePopup')">
      <div class="p-2">
                <label for="">Година уписа</label>
                <app-input v-model="classroomYear" :type="'input'" :name="'classroomYear'"></app-input>
            </div>
            <div class="p-2">
                <app-select :label="'Индекс одељења'" v-model="classroomNumber" :options="classroomNumbers"></app-select>
            </div>
            <div class="p-2">
                <app-select :label="'Смер одељења'" v-model="classroomType" :options="classroomTypes"></app-select>
            </div>
            <div class="flex items-center justify-end py-3 px-2">
                <app-button :mode="'btn-blue'" :btn-text="'Додај одељење'" @click.native="addClassroom"></app-button>
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
            classroomYear: '',
            classroomType: '',
            classroomNumber: '',
            
        }
    },
    components:{
        AppPopup,
        AppInput,
        AppButton,
        AppSelect
    },
    created(){
        this.classroomTypes = classroomTypes
        this.classroomNumbers = classroomNumbers
    },
    methods:{
        addClassroom(){
            return this.$store.dispatch('classroom/addClassroom',{
                type: this.classroomType,
                year_started: this.classroomYear,
                classroom_number: this.classroomNumber
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