<template>
   <app-popup @closePopup="$emit('closePopup')">
        <div class="p-2">
            <label for="">Број:</label>
            <app-input v-model="school_number" :type="'input'" :name="'school_number'"></app-input>
        </div>
     
        <div class="p-2">
            <label for="">Број у регистру:</label>
            <app-input v-model="registration_number" :type="'input'" :name="'registration_number'"></app-input>
        </div>
        <div class="p-2">
            <label for="">Датум рођења:</label>
            <app-input v-model="date_of_birth" :type="'date'" :name="'date_of_birth'"></app-input>
        </div>
        <div class="p-2">
            <label for="">Место рођења:</label>
            <app-input-location v-model="city_of_birth" :name="'city_of_birth'"></app-input-location>
        </div>
        <div class="p-2">
            <label for="">Општина рођења:</label>
            <app-input v-model="borough_of_birth" :type="'input'" :name="'borough_of_birth'"></app-input>
        </div>
        <div class="p-2">
            <label for="">Ученик уписан у разред:</label>
            <app-select v-model="signed_in_at" :name="'signed_in_at'" :options="signedInAtTypes"></app-select>
        </div>
        <div class="p-2">
            <label for="">Ученик уписан као редован/ванредан</label>
            <app-select v-model="signed_in_as"  :name="'signed_in_as'" :options="signedInAsTypes"></app-select>
        </div>
        <div class="flex items-center justify-end py-3 px-2">
            <app-button :mode="'btn-blue'" :btn-text="'Додај ученика'" @click.native="addStudentPersonalData"></app-button>
        </div>
            
  </app-popup>
</template>

<script>
import AppPopup from "@/components/popup/AppPopup";
import AppInput from "@/components/utility/AppInput";
import AppSelect from "@/components/utility/AppSelect";
import AppButton from "@/components/utility/AppButton";
import AppInputLocation from '@/components/utility/AppInputLocation';

export default {
 components:{
        AppPopup,
        AppInput,
        AppButton,
        AppSelect,
        AppInputLocation
    },
    data(){
        return{
            signed_in_as: '',
            signed_in_at: '',
            borough_of_birth: '',
            city_of_birth: '',
            date_of_birth: '',
            registration_number: '',
            school_number: '',
            signedInAsTypes:{
                1:{
                    id: 'редован',
                    value: 'редован'
                },
                2:{
                    id: 'ванредан',
                    value: 'ванредан'
                },
            },
            signedInAtTypes:{
                1:{
                    id: 'I',
                    value: 'I'
                },
                2:{
                    id: 'II',
                    value: 'II'
                },
                3:{
                    id: 'III',
                    value: 'III'
                },
                4:{
                    id: 'IV',
                    value: 'IV'
                },
            }
        }
    }
}
</script>

<style>

</style>