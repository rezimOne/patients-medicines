<template>
  <div class="wrapper">
    <label>DRUG</label>
    <p>{{ message }}</p>
  </div>
</template>
<script lang="js">
  export default {
    name: 'MedicineCard',
    data() {
      return {
        message: 'I am a drug :D'
      }
    }
  }
</script>
<style lang="scss" scoped>
.wrapper {
  border: 1px solid #f0f3d2;
  height: 50px;
  width: 300px;
  margin: 0 auto;
  border-radius: 25px;
  p {
    margin: 0;
  }
  margin-bottom: 5px;
}


</style>