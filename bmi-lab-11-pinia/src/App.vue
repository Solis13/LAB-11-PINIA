<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'
import { useBMIStore } from './stores/BMIStore.js'
import { storeToRefs } from "pinia"

const BMIStore = useBMIStore()

const { calculateBMI } = storeToRefs(BMIStore)

</script>

<template>

  <h1> Body Mass Index Calculator </h1>

  hello from App.vue!

  <BodyMassIndexForm  v-on:stats-entered="calculateBMI"/>

  <div>Your BMI is {{ calculateBMI }}</div>
 
</template>

<style scoped>

</style>
