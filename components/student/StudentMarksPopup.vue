<template>
   <app-popup @closePopup="$emit('closePopup')">
       <div class="p-2 mx-2 flex flex-col">
           <label for="schoolYear">Школска година</label>
                <app-select :name="'schoolYear'" v-model="schoolYear" :options="activeYears" ></app-select>
            </div>
        <div class="p-2 flex ">
            
            <div class="flex flex-1 flex-col mx-2">
                <label for="subject">Предмет</label>
                <app-select v-model="subject" :options="subjects" :name="'subject'"></app-select>
            </div>
            <div class="flex  flex-col mx-2">
                <label for="mark">Оцена</label>
                <app-select v-model="mark" :name="'marks'" :options="marks"></app-select>
            </div>
            <div class="flex justify-items-center items-end">
                <app-button :mode="'btn-green'"  :icon="'text-white'" @click.native="addSubjectToList">
                    <template #icon> 
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </template>
                </app-button>
            </div>
        </div>
     
        <div class="border-t-2 border-indigo-300" v-show="listOfMarks.length > 0">
            <div class="flex p-4 mx-4 " v-for="addedMark in listOfMarks" :key="addedMark.id">
                <div class="pr-2">{{addedMark.id}}. </div>
                <div class="flex-1">{{addedMark.subject.value}}</div>
                <div class="pr-2 font-bold">{{addedMark.mark}}</div>
                <div class="pr-2 ">{{addedMark.schoolYear}}</div>
                <div class="ml-2 cursor-pointer" @click="removeSubjectFromList(addedMark.id)">
                    <svg class="h-5 w-5 currentColor bg-red-600 text-white rounded-full" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                </div>

            </div>
        </div>
        <div class="flex items-center justify-end py-3 px-2" v-if="listOfMarks.length > 0">
            <app-button :mode="'btn-blue'" :btn-text="'Сачувај промене'" @click.native="addStudentМаrks"></app-button>
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
    data(){
        return{
            schoolYear: '',
            subject: {},
            mark: '',
            listOfMarks:[],
            marks:{
                1:{
                    id:1,
                    value:1
                },
                2:{
                    id:2,
                    value:2
                },
                3:{
                    id:3,
                    value:3
                },
                4:{
                    id:4,
                    value:4
                },
                5:{
                    id:5,
                    value:5
                },
            }
        }
    },
    methods:{
        addSubjectToList(){
            this.listOfMarks.push({
                id: this.listOfMarks.length + 1,
                mark: this.mark,
                subject: this.subjects.find(subject => subject.id == this.subject),
                schoolYear: this.schoolYear,
            })
            this.mark = undefined;
            this.subject = undefined;
            this.schoolYear = undefined;
        },
        removeSubjectFromList(id){
            this.listOfMarks = this.listOfMarks.filter(subject => subject.id !== id)
        },
        addStudentМаrks(){
            this.$store.dispatch('student/addStudentMarks',{
                marks: this.listOfMarks,
                student_id: this.$route.params.students
            })
        }
    },
    mounted(){
        this.$store.dispatch('subject/loadUserSubjects',{
            classroom_id: this.$route.params.classrooms
    });
        this.$store.dispatch('classroom/loadClassroom',{
            classroom_id: this.$route.params.classrooms
        })
  },
  computed:{
    subjects(){
      return this.$store.getters['subject/userSubjects'].map(subject =>{
        return {
          id: subject.id,
          value: subject.name
        }
      });
    },
    activeYears(){
        return this.$store.getters['classroom/activeYears']
    }
  }
}
</script>

<style>

</style>