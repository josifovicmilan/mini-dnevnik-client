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
            <app-input v-model="date_of_birth" :type="'input'" :name="'date_of_birth'"></app-input>
        </div>
        <div class="p-2">
            <label for="">Место рођења:</label>
            <app-input v-model="city_of_birth" :type="'input'" :name="'city_of_birth'"></app-input>
        </div>
        <div class="p-2">
            <label for="">Општина рођења:</label>
            <app-input v-model="borough_of_birth" :type="'input'" :name="'borough_of_birth'"></app-input>
        </div>
        <div class="p-2">
            <label for="">Ученик уписан у разред:</label>
            <app-input v-model="signed_in_at" :type="'input'" :name="'signed_in_at'"></app-input>
        </div>
        <div class="p-2">
            <label for="">Ученик уписан као редован/ванредан</label>
            <app-input v-model="signed_in_as" :type="'input'" :name="'signed_in_as'"></app-input>
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
export default {
 components:{
        AppPopup,
        AppInput,
        AppButton,
        AppSelect
    },
}
</script>

<style>

</style>