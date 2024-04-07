import { defineStore } from "pinia"

import { ref,computed } from 'vue'


export const useBMIStore = defineStore('bmi', () => {

    const height = ref (0)
    const weight = ref(0)

    const calculateBMI = computed(() => {

        const bmi = weight.value / ( height.value * height.value ) // here we do the math when is kilograms 
        return bmi 
    })
    

    return {
        height,
        calculateBMI,
        weight
    }
})