<template>
  <app-card>
      <div class="flex flex-col">
        <div class="flex text-sm py-1 bg-gray-100">
          <div class="w-1/4 ">
            <span class="flex-1 px-2">Godina</span>
          </div>
          <div class="w-3/4 flex justify-between">

            <span class="px-2 text-gray-500">2020/21</span>
            <span class="px-2 text-gray-500">2021/22</span>
            <span class="px-2 text-gray-500">2022/23</span>
            <span class="px-2 text-gray-500">2023/24</span>
          </div>
        </div>
        <div class="flex text-sm py-1 bg-gray-100 border-b">
          <div class="w-1/4">
            <span class="flex-1 px-2">Predmeti</span>
          </div>
          <div class="w-3/4 flex justify-between">
            <span class="px-2 text-gray-500">I raz.</span>
            <span class="px-2 text-gray-500">II raz.</span>
            <span class="px-2 text-gray-500">III raz.</span>
            <span class="px-2 text-gray-500">IV raz.</span>
          </div>
        </div>
        <div class="flex text-sm py-1">
          <div class="w-1/4">
            <span class="flex-1 px-2">srpski jezik</span>
          </div>
          <div class="w-3/4 flex justify-between">
            <span class="px-2 text-gray-500">5</span>
            <span class="px-2 text-gray-500">4</span>
            <span class="px-2 text-gray-500">5</span>
            <span class="px-2 text-gray-500">4</span>
          </div>
        </div>
         <div class="flex text-sm py-1">
          <div class="w-1/4">
            <span class="flex-1 px-2">matematika</span>
          </div>
          <div class="w-3/4 flex justify-between">
            <span class="px-2 text-gray-500">5</span>
            <span class="px-2 text-gray-500">4</span>
            <span class="px-2 text-gray-500">5</span>
            <span class="px-2 text-gray-500">4</span>
          </div>
        </div>
         <div class="flex text-sm py-1">
          <div class="w-1/4">
            <span class="flex-1 px-2">istorija</span>
          </div>
          <div class="w-3/4 flex justify-between">
            <span class="px-2 text-gray-500">5</span>
            <span class="px-2 text-gray-500">4</span>
            <span class="px-2 text-gray-500">5</span>
            <span class="px-2 text-gray-500">4</span>
          </div>
        </div>
         <div class="flex text-sm py-1">
          <div class="w-1/4">
            <span class="flex-1 px-2">fizika</span>
          </div>
          <div class="w-3/4 flex justify-between">
            <span class="px-2 text-gray-500">5</span>
            <span class="px-2 text-gray-500">4</span>
            <span class="px-2 text-gray-500">5</span>
            <span class="px-2 text-gray-500">4</span>
          </div>
        </div>
      </div>
    </app-card>
</template>

<script>
import AppCard from "@/components/layout/AppCard"
export default {

    components:{
        AppCard
    }
}
</script>

<style>

</style>