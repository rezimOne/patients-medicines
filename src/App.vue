<template>
  <div id="app">
    <nav class="navigation">
      <ul>
        <li><router-link class="link" :to="{ name: 'HomeComponent' }">Home</router-link></li>
        <li><router-link class="link" :to="{ name: 'PatientsComponent' }">Patients</router-link></li>
        <li><router-link class="link" :to="{ name: 'MedicinesComponent' }">Medicines</router-link></li>
      </ul>
      <button class="button-load-data" @click="createPatientsWithMedicines">{{ loginStatus ? 'Log out' : 'Log in' }}</button>
    </nav>
    <div class="components">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      allPatientsWithMedicines: {},
      loginStatus: false,
    }
  },
  beforeMount() {
    this.$store.dispatch('saveStorePatients');
    this.$store.dispatch('saveStoreMedicines');
  },
  computed: {
    allPatients() {
      return this.$store.getters.getPatients;
    },
    allMedicines: function() {
      return this.$store.getters.getMedicines;
    },
    allPatientsIds: function() {
      return this.$store.getters.getPatientsIds
    },
  },
  methods: {
    createPatientsWithMedicines() {
      if (this.allMedicines && this.allPatientsIds) {
        this.allPatientsIds.forEach(key => {

          this.allPatientsWithMedicines[key] = {
            patientFullName: '',
            medicines: [],
            totalMedicines: null,
          }

        });
        for (let medicine in this.allMedicines) {
          for (let patientId in this.allMedicines[medicine].patientIds) {
            for (let idItem in this.allPatientsIds) {

              const patientIdList = this.allMedicines[medicine].patientIds;

              if (this.allPatientsIds[idItem] === patientIdList[patientId]) {
                this.allPatientsWithMedicines[patientIdList[patientId]].medicines.push(

                  {
                    medicationName: this.allMedicines[medicine].medicationName,
                    unit: this.allMedicines[medicine].unit,
                    strength: this.allMedicines[medicine].strength,
                    form: this.allMedicines[medicine].form,
                    expDate: this.allMedicines[medicine].expDate
                  }

                )
                this.allPatientsWithMedicines[patientIdList[patientId]].totalMedicines = this.allPatientsWithMedicines[patientIdList[patientId]].medicines.length;
                this.allPatientsWithMedicines[patientIdList[patientId]].patientFullName = `${this.allPatients[patientId].name} ${this.allPatients[patientId].lastName}`;
              }
            }
          }
        }
      }
      this.$store.dispatch('saveStorePatientsWithMedicines', this.allPatientsWithMedicines);
      console.log(this.allPatientsWithMedicines);
      this.loginStatus = true;
    },
  }
}
</script>

<style lang="scss">
body {
  // background-color: #283e55;
  // background-color: #2220af;
  background-image: linear-gradient(to bottom right, #133a9e, #8cf4bd);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f0f3d2;
  display: flex;
  flex-direction: column;
  // margin: 0 auto;
  // background-color:#425262;
  width: 450px;
  margin: 0 auto;
  box-sizing: border-box;
  // padding: 5px;
}
.navigation {
  box-sizing: border-box;
  padding: 5px;
  border: 2px solid #f0f3d2;
  height: 50px;
  width: 100%;
  border-radius: 20px 20px 0 0;
  margin-bottom: 5px;
  // margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .link {
    text-decoration: none;
    margin-left: 10px;
    color: #f0f3d2;
    font-weight: bold;
  }
  .button-load-data {
    border-style: none;
    height: 30px;
    width: 80px;
    margin-right: 2px;
    border-radius: 10px;
    background-color: #d2d5b9;
    color: #425262;
    font-weight: bold;
    cursor: pointer;
    transition: 0.1s all;
    &:hover {
      background-color: white;
    }
    &:active {
      transform: translateY(-1px);
    }
  }
}
.components {
  box-sizing: border-box;
  height: 700px;
  border: 2px solid #f0f3d2;
  width: 100%;
}
</style>
