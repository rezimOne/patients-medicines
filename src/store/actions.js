import axios from 'axios'

const actions = {
  saveStorePatients: ({ commit }) => {
    axios.get('https://cerber.pixel.com.pl/api/patients')
    .then(response => {
      // console.log(response.data);
      commit('setStorePatients', response.data)
    })
    .catch(err => console.log(err))
  },
  saveStoreMedicines: ({ commit }) => {
    axios.get('https://cerber.pixel.com.pl/api/medicine')
    .then(response => {
      //console.log(response.data);
      commit('setStoreMedicines', response.data)
    })
    .catch(err => console.log(err))
  },
  saveStorePatientsWithMedicines: ({commit}, payload) => {
    commit('setStorePatientsWithMedicines', payload)
  }
};
export default actions;