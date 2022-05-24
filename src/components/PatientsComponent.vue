<template>
  <div class="wrapper">
    <div class="wrapper-sort">
      <div><span>age min</span><input type="text" v-model="sortParams.ageMin"></div>
      <div><span>age max</span><input type="text" v-model="sortParams.ageMax"></div>
      <div><span>mg</span><input type="text" v-model="sortParams.mg"></div>
      <!-- <label>[mg] max: <input type="text" v-model="sortParams.mgMax"></label> -->
      <button @click="sortPatientsSubmit"><span>v</span></button>
      <button @click="sortPatientsClear"><span>x</span></button>
      <button @click="setPatientsIdsByMediStrength"><span style="color: orange;">Click</span></button>
      <button @click="getPatientsByAgeMediStrength"><span style="color: red;">Click</span></button>
    </div>
    <div class="wrapper-cards">
      <PatientCard v-for="patient in allPatients"
      :key="patient.id"
      :patient="patient"
      />
      <button @click="prevPage">PREV</button>
      <button @click="nextPage">NEXT</button>
      <span>Page: {{ currentPage }}/{{ numOfPages }}</span>
    </div>
  </div>
</template>

<script lang="js">
import PatientCard from './PatientCard.vue'
export default {
  name: 'PatientsComponent',
  components: { PatientCard },
  data() {
    return {
      sortParams: {
        ageMin: null,
        ageMax: null,
        mg: null, //mgMin
        // mgMax: null,
        isActive: false
      },
      patientsIdsByMediStrength: [],
      currentPage: 1,
      recordsPerPage: 10,
    }
  },
  computed: {
    allPatients() {
      if(this.sortParams.isActive){
        return this.$store.getters.getPatients.filter(item =>
          item.age >= parseInt(this.sortParams.ageMin) ||
          item.age <= parseInt(this.sortParams.ageMax) ||
          this.patientsIdsByMediStrength.includes(item.id)
        )
      }
      return this.$store.getters.getPatients;
    },
    patjentsMedicinesObj() {
      return this.$store.getters.getPatientsWithMedicines;
    },
    numOfPages() {
      return Math.ceil(this.allPatients.length / this.recordsPerPage);
    }
  },
  methods: {
    sortPatientsSubmit() {
      this.sortParams.isActive = true;
    },
    sortPatientsClear() {
      for(let key in this.sortParams) {
        this.sortParams[key] = null;
      }
      this.sortParams.isActive = false;
    },
    setPatientsIdsByMediStrength() {
      for(let key in this.patjentsMedicinesObj) {
        if(this.patjentsMedicinesObj[key].medicines.find(item => item.strength > parseInt(this.sortParams.mg))) {
          this.patientsIdsByMediStrength.push(key);
        }
      }
      console.log(this.patientsIdsByMediStrength)
    },
    getPatientsByAgeMediStrength() {
      let myArr = [];
      for(let key in this.patjentsMedicinesObj) {
        if(this.patjentsMedicinesObj[key].medicines.find(item => item.strength > 8)) {
          myArr.push(key);
        }
      }
      console.log(this.$store.getters.getPatients.filter(item => item.age < 63 && myArr.includes(item.id)));
    },
    prevPage() {
      if(this.currentPage > 1){
        this.currentPage--;
        //console.log(this.currentPage)
      }
    },
    nextPage() {
      if(this.currentPage < this.numOfPages){
        this.currentPage++;
        //console.log(this.currentPage)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.wrapper-cards {
  margin: 0 auto;
}
.wrapper-sort {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #f0f3d2;
  margin-bottom: 10px;
  color: #425262;
  font-size: .7rem;
  font-weight: bold;
  div {
    // margin-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    margin-bottom: 10px;
    span {
      margin-bottom: 5px;
      font-size: 0.9rem;
    }
  }
  input {
    outline: none;
    width: 45px;
    height: 40px;
    color: #f0f3d2;
    font-size: 1.6rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: #13569ec7;
    box-shadow: inset 3px 4px 5px 1px #1414147b;
    text-align: center;
    cursor: pointer;

  }
  button {
    border-style: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: #425262;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s all;
    &:hover {
      background-color: #5e6f80;
    }
    &:active {
      transform: translateY(-1px);
    }
    span {
      font-size: .8rem;
      color: #f0f3d2;
      font-weight: bold;
    }
  }
}
.pagination {
  position: absolute;
  bottom: 0;
  left: 5px;
}
</style>