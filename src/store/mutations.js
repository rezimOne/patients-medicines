const mutations = {
  setStorePatients: (state, data) => state.patients = data,
  setStoreMedicines: (state, data) => state.medicines = data,
  setStorePatientsWithMedicines: (state, payload) => state.patientsWithMedicines = payload
}
export default mutations;