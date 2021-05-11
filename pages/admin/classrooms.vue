<template>
  <div class="flex flex-col lg:flex-row lg:flex-wrap ">
    <div class="flex-shrink-0 w-full bg-gray-400 h-16 flex items-center justify-between ">
        <app-select></app-select>
        <app-select></app-select>
    </div>
    <div class="shadow-xl border rounded-xl overflow-hidden text-sm box-border  mx-4  lg:w-1/2 lg:mx-4 lg:flex-1 text-gray-800 my-4 lg:mb-12">
        <div class="bg-yellow-500 grid grid-cols-12 justify-items-center gap-1 px-2 py-1 text-gray-50">
            <span class="justify-self-start col-span-3">Име</span>
            <span class="">Пол</span>
            <span class="hidden sm:block sm:col-span-3">ОШ</span>
            <span class="col-span-2 sm:col-span-1">Језик</span>
            <span class="col-span-2 sm:col-span-1">ВГ</span>
            <span>П1</span>
            <span>П2</span>
            <span class="col-span-2 sm:col-span-1 justify-self-end">Поени</span>
        </div>
         <div class="grid grid-cols-12 justify-items-center place-items-center px-2 border-b py-1">
            <span class="col-span-3 justify-self-start ">Пера Перић</span>
            <span class=" ">м</span>
            <span class="hidden sm:block col-span-3">Вук Караџић</span>
            <span class="col-span-2 sm:col-span-1 ">н</span>
            <span class="col-span-2 sm:col-span-1 ">г</span>
            <span class="">УД</span>
            <span class="">ЗС</span>
            <span class="col-span-2 sm:col-span-1  justify-self-end">79.02</span>
        </div>
       <div class="grid grid-cols-12 justify-items-center place-items-center px-2 border-b py-1">
            <span class="col-span-3 justify-self-start ">Пера Перић</span>
            <span class=" ">м</span>
            <span class="hidden sm:block col-span-3">Вук Караџић</span>
            <span class="col-span-2 sm:col-span-1 ">н</span>
            <span class="col-span-2 sm:col-span-1 ">г</span>
            <span class="">УД</span>
            <span class="">ЗС</span>
            <span class="col-span-2 sm:col-span-1  justify-self-end">79.02</span>
        </div>
    </div>
    <div class="shadow-xl border rounded-xl overflow-hidden text-sm  lg:w-1/2  mx-4 lg:mx-4 lg:flex-1 text-gray-700 my-4 lg:mb-12">
        <div class="bg-blue-500 grid grid-cols-12 justify-items-center gap-1 px-2 py-1 text-gray-50">
            <span class="justify-self-start col-span-3">Име</span>
            <span class="">Пол</span>
            <span class="hidden sm:block sm:col-span-3">ОШ</span>
            <span class="col-span-2 sm:col-span-1">Језик</span>
            <span class="col-span-2 sm:col-span-1">ВГ</span>
            <span>П1</span>
            <span>П2</span>
            <span class="col-span-2 sm:col-span-1 justify-self-end">Поени</span>
        </div>
         <div class="grid grid-cols-12 justify-items-center place-items-center px-2 border-b py-1">
            <span class="col-span-3 justify-self-start ">Пера Перић</span>
            <span class=" ">м</span>
            <span class="hidden sm:block col-span-3">Вук Караџић</span>
            <span class="col-span-2 sm:col-span-1 ">н</span>
            <span class="col-span-2 sm:col-span-1 ">г</span>
            <span class="">УД</span>
            <span class="">ЗС</span>
            <span class="col-span-2 sm:col-span-1  justify-self-end">79.02</span>
        </div>
       <div class="grid grid-cols-12 justify-items-center place-items-center px-2 border-b py-1">
            <span class="col-span-3 justify-self-start ">Пера Перић</span>
            <span class=" ">м</span>
            <span class="hidden sm:block col-span-3">Вук Караџић</span>
            <span class="col-span-2 sm:col-span-1 ">н</span>
            <span class="col-span-2 sm:col-span-1 ">г</span>
            <span class="">УД</span>
            <span class="">ЗС</span>
            <span class="col-span-2 sm:col-span-1  justify-self-end">79.02</span>
        </div>
    </div>
        <div class="shadow-xl border rounded-xl overflow-hidden text-sm lg:mx-4 mx-4 lg:w-full text-gray-700">
        <div class="bg-red-500 grid grid-cols-6 justify-items-center gap-1 px-2 py-1 text-gray-50">
            <span class="justify-self-start col-span-2">Одељење</span>
            <span class="">1</span>
            <span class="">2</span>
            <span class="">3</span>
            <span class="">4</span>
        </div>
        <div class="grid grid-cols-6 justify-items-center place-items-center px-2 border-b py-1">
            <span class="col-span-2 justify-self-start ">Укупно</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
         <div class="grid grid-cols-6 justify-items-center place-items-center px-2 border-b py-1">
            <span class="col-span-2 justify-self-start ">Дечаци</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
       <div class="grid grid-cols-6 justify-items-center place-items-center px-1 border-b py-1">
            <span class="col-span-2 justify-self-start ">Девојчице</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
        <div class="grid grid-cols-6 justify-items-center place-items-center px-1 border-b py-1">
            <span class="col-span-2 justify-self-start ">Немачки језик</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
        <div class="grid grid-cols-6 justify-items-center place-items-center px-1 border-b py-1">
            <span class="col-span-2 justify-self-start ">Француски језик</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
        <div class="grid grid-cols-6 justify-items-center place-items-center px-1 border-b py-1">
            <span class="col-span-2 justify-self-start ">Италијански језик</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
        <div class="grid grid-cols-6 justify-items-center place-items-center px-1 border-b py-1">
            <span class="col-span-2 justify-self-start ">Верско</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
        <div class="grid grid-cols-6 justify-items-center place-items-center px-1 border-b py-1">
            <span class="col-span-2 justify-self-start ">Грађанско</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
        <div class="grid grid-cols-6 justify-items-center place-items-center px-1 border-b py-1">
            <span class="col-span-2 justify-self-start ">ЈМК</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
        <div class="grid grid-cols-6 justify-items-center place-items-center px-1 border-b py-1">
            <span class="col-span-2 justify-self-start ">ПГД</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
        <div class="grid grid-cols-6 justify-items-center place-items-center px-1 border-b py-1">
            <span class="col-span-2 justify-self-start ">ЗС</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
        <div class="grid grid-cols-6 justify-items-center place-items-center px-1 border-b py-1">
            <span class="col-span-2 justify-self-start ">ПН</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
        <div class="grid grid-cols-6 justify-items-center place-items-center px-1 border-b py-1">
            <span class="col-span-2 justify-self-start ">Поени</span>
            <span class="">30</span>
            <span class="">29</span>
            <span class="">29</span>
            <span class="">30</span>
        </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from "@/components/layout/AppSidebar";
import AppInput from "@/components/utility/AppInput";
import AppSelect from "@/components/utility/AppSelect";
export default {

    components:{
        AppSidebar,
        AppSelect
    }
}
</script>

<style>

</style>