const express = require('express')
const patientRouter = express.Router()

const { getAllPatients, addPatient, editPatient, deletePatient } = require('../queries/patient.queries')

patientRouter.get('/', async (req, res) => {
  try {
    const patients = await getAllPatients()
    res.status(200).json({ message: "patients fetched", patients })
  } catch (err) {
    res.status(500).json({ message: "error fetching patients" })
  }
})

patientRouter.post('/', async (req, res) => {
  try {
    const patient = await addPatient(req.body)
    res.status(201).json({ message: "added patient here", patient })
  } catch (err) {
    res.status(500).json({ message: "error adding patient" })
  }
})

patientRouter.put('/:id', async (req, res) => {
  try {
    const patient = await editPatient(req.params.id, req.body)
    res.status(200).json({ message: "patient updated", patient })
  } catch (err) {
    res.status(500).json({ message: "error updating patient" })
  }
})

patientRouter.delete('/:id', async (req, res) => {
  try {
    const patient = await deletePatient(req.params.id)
    res.status(200).json({ message: "patient deleted", patient })
  } catch (err) {
    res.status(500).json({ message: "error deleting patient" })
  }

})
module.exports = patientRouter