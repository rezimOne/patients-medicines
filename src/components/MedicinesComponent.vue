<template>
  <div class="wrapper">
    <MedicineCard v-for="(medicine, index) in medicines" :key=index />
  </div>
</template>

<script lang="js">
import MedicineCard from './MedicineCard.vue'
export default {
  name: 'MedicinesComponent',
  components: { MedicineCard },
  data() {
    return {
      medicines: ['drug1', 'drug2', 'drug3', 'drug4'],
    }
  },
  methods: {
    someFun() {
      console.log(this.val)
    }
  },
  computed: {
    allMedicines: function() {
      return this.$store.getters.getMedicines;
    },
    val: function() {
      return this.$store.getters.getMyPatients;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>