<template>
  <div class="wrapper-card">
    <div class="image-patient">
      <img :src="images.iconPatient" />
    </div>
    <div class="wrapper-patient-info">
      <span>{{ patient.name }}</span>
      <span style="font-size: 0.75rem;">age: {{ patient.age }}</span>
      <span></span>
    </div>
    <div class="wrapper-medicine-info">
      <button class="button-medicine-data" @click="myFun">
        <img :src="images.iconAid" />
      </button>
      <div class="wrapper-text">
        <p>Drugs inside:</p>
        <span>{{ medicinesById.totalMedicines }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="js">
  export default {
    name: 'PatientCard',
    props: ['patient'],
    data() {
      return {
        images: {
          iconPatient: require('../assets/icon-person.png'),
          iconAid: require('../assets/icon-aid2.png')
        }
      }
    },
    computed: {
      patientsWithMedicines() {
        return this.$store.getters.getPatientsWithMedicines;
      },
      medicinesById() {
        let val = ''
        for (let key in this.patientsWithMedicines ) {
          if(key == this.patient.id) {
            val = this.patientsWithMedicines[key];
          }
        }
        return val;
      }
    },
    methods: {
      myFun(){
        console.log(`* Patient ${this.patient.id} medicines: `, this.medicinesById);
      }
    }
  }
</script>
<style lang="scss" scoped>
.wrapper-card {
  position: relative;
  border: 1.7px solid #f0f3d2;
  height: 50px;
  width: 300px;
  margin: 0 auto;
  border-radius: 25px;
  margin-bottom: 10px;
  .image-patient {
    z-index: 1;
    position: absolute;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background-color: #f0f3d2;
    top: 5px;
    left: 5px;
    box-shadow: 2px 0 3px 0 #b9b8b8;
    img {
      position: relative;
      height: 80%;
      top: 2px;
    }
  }
  .wrapper-patient-info {
    position: absolute;
    top: 5px;
    height: 40px;
    width: 170px;
    background-color:#d2d5b9;
    left: 25px;
    color: #425262;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border-radius: 0 0 20px 0;
    line-height: 1rem;
    }
  .wrapper-medicine-info {
    position: absolute;
    top: 5px;
    height: 40px;
    width: 95px;
    background-color:#eae6a3;
    border-radius: 0 20px 20px 0;
    right: 5px;
    .wrapper-text {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 40px;
      width: 58px;
      padding: 4px;
      p {
        margin: 0;
        color: #425262;
        font-size: .7rem;
        font-weight: bold;
        text-align: left;
      }
      span {
        margin: 0;
        color: #425262;
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
  .button-medicine-data {
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    position: absolute;
    height: 30px;
    width: 30px;
    top: 5px;
    right: 5px;
    border-radius: 15px;
    background-color: #9aa5b1;
    cursor: pointer;
    transition: 0.1s all;
    &:active {
      transform: translateY(-1px);
    }
    img {
      height: 28px;
    }
  }
}
</style>