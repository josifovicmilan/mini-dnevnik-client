<template>
  <app-popup @closePopup="$emit('closePopup')">
        <div class="p-2">
            <label for="">Назив предмета:</label>
            <app-input v-model="name"  :name="'name'"></app-input>
        </div>
        <div class="p-2">
            <label for="">Тип предмета:</label>
            <app-select v-model="type"  :name="'type'" :options="options"></app-select>
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
            name: null,
            type:null,
            options:
            {
                1:{
                    id: 'обавезни',
                    value: 'обавезни'
                },
                2:{
                    id: 'обавезни-изборни',
                    value: 'обавезни-изборни'
                },
                3:{
                    id: 'изборни',
                    value: 'изборни'
                }
            },
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
            console.log(this.type)
            return this.$store.dispatch('subject/addSubject',{     
                name: this.name,
                type: this.type,
                userId : this.$auth.user.user.id
            }).then(()=>{
                this.name = '';
                this.type = '';
                this.$emit('closePopup')
            });
        }
    }
}
</script>

<style>

</style>