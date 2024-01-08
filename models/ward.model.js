const mongoose = require('mongoose')

const wardSchema = new mongoose.Schema({
  wardNumber: {
    type: Number,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  specialisation:{
    type:String,
  enum:["General Practice","Emergency","ICU","Nursery"] 
  }
})

const Ward = mongoose.model('Ward', wardSchema)
module.exports = Ward