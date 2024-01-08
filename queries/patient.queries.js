const mongoose = require('mongoose')
const Patient = require('../models/patient.model')

async function getAllPatients() {
  try {
    const patients = await Patient.find().populate({
      path: 'ward',
      select: 'wardNumber capacity specialisation'
    })
    console.log(patients)
    return patients
  } catch (error) {
    throw error
  }
}

async function addPatient(patient) {
  try {
    const newPatient = await Patient(patient)
    const savedPatient = await newPatient.save()
    const populatedPatient = await savedPatient.populate({
      path: 'ward',
      select: 'wardNumber capacity specialisation'
    })
    // const savedPatient = await populatedPatient.save()

    return populatedPatient
  } catch (error) {
    console.log('Error adding new patient:', error)
  }
}




async function editPatient(patientId, patient) {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(patientId, patient, { new: true })
    if (updatedPatient) {
      console.log(updatedPatient)
      const populatedPatient = await updatedPatient.populate({
        path: 'ward',
        select: 'wardNumber capacity specialisation'
      })

      return populatedPatient
    } else {
      console.log('Patient not found')
    }
  } catch (error) {
    throw error
  }
}

async function deletePatient(patientId) {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(patientId)
    return deletedPatient
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllPatients,
  addPatient,
  editPatient,
  deletePatient
}