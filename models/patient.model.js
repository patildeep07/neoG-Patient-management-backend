const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  contact: {
    type: Number
  },
  ward: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Ward'  
  }
})
const Patient = mongoose.model('Patient', patientSchema)
module.exports = Patient