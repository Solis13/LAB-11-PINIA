<script setup>
import { ref } from 'vue'

import { useBMIStore } from '../stores/BMIStore.js'
import { storeToRefs } from "pinia"

const BMIStore = useBMIStore()

const { height } = storeToRefs(BMIStore)
const { weight } = storeToRefs(BMIStore)


function statsEntered(){
  emit('statsEntered',height.value,weight.value)

} 



</script>

<template>

  <h2> This is Body Mass Index 
    Form to  enter your data</h2>

    <label>Enter height in meters</label>
    <input v-model="height">
    <label> Enter weight in kilograms</label>
    <input v-model="weight">
  
 
</template>

<style scoped>

</style>
