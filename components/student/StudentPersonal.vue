<template>
  <app-card>
    <app-spinner v-if="!student"></app-spinner>
      <div v-else class="flex flex-col">
        <div class="flex justify-between items-center">
          <span class="px-2 py-1 text-gray-500">Број: </span>
          <span class="px-2 py-1 text-gray-800">123456</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="px-2 py-1 text-gray-500">Број у регистру</span>
          <span class="px-2 py-1 text-gray-800">123456</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="px-2 py-1 text-gray-500">ЈМБГ</span>
          <span class="px-2 py-1 text-gray-800">{{student.jmbg}}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="px-2 py-1 text-gray-500">Ime:</span>
          <span class="px-2 py-1 text-gray-800">{{ student.first_name}} {{student.last_name}}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="px-2 py-1 text-gray-500">Datum rodjenja: </span>
          <span class="px-2 py-1 text-gray-800">12.08.2000.</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="px-2 py-1 text-gray-500">Mesto, opstina rodjenja:</span>
          <span class="px-2 py-1 text-gray-800">Krusevac, Krusevac</span>
        </div>
        <div class="flex justify-between items-center"> 
          <span class="px-2 py-1 text-gray-500">Drzava rodjenja:</span>
          <span class="px-2 py-1 text-gray-800">Srbija</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="px-2 py-1 text-gray-500">Ime roditelja</span>
          <span class="px-2 py-1 text-gray-800">{{student.fathers_name}}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="px-2 py-1 text-gray-500"> Ucenik upisan u </span>
          <span class="px-2 py-1 text-gray-800"> prvi</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="px-2 py-1 text-gray-500">razred kao</span>
          <span class="px-2 py-1 text-gray-800">redovan</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="px-2 py-1 text-gray-500">obrazovni profil-smer</span>
          <span class="px-2 py-1 text-gray-800">prirodno-matematicki smer</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="px-2 py-1 text-gray-500">obrazovanje traje</span>
          <span class="px-2 py-1 text-gray-800">cetiri godine</span>
          
        </div>
      </div>
    </app-card>
</template>

<script>
import AppSpinner from "@/components/layout/AppSpinner";
import AppCard from "@/components/layout/AppCard"
export default {
    components:{
        AppCard,
        AppSpinner
    },
    props:['student']
}
</script>

<style>

</style>