const getters = {
  getPatients: (state) => state.patients,
  getMedicines: (state) => state.medicines,
  getPatientsIds: (state) => state.patients.map(item => item.id),
  getPatientsWithMedicines: (state) => state.patientsWithMedicines,
};
export default getters;