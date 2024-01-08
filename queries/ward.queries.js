const mongoose = require('mongoose')
const Ward = require('../models/ward.model')

async function getAllWards(){
  try{
  const wards = await Ward.find()
  return wards
  }catch(error){
    throw error
  }
}

async function addWard(ward){
  try{
    const newWard = new Ward(ward)
    const savedWard = await newWard.save()
    // console.log(savedPatient)
    return savedWard
  } catch(error){
    throw error
  }
}

async function editWard(wardId, ward){
  try{
    const updatedWard = await Ward.findByIdAndUpdate(wardId, ward, {new: true})
    if(updatedWard){
    return updatedWard
    }else{
      console.log('ward not found')
    }
  } catch(error){
    throw error
  }
}

async function deleteWard(wardId){
  try{
    const deletedWard = await Ward.findByIdAndDelete(wardId)
      return deletedWard
  } catch(error){
    throw error
  }
}
module.exports = {getAllWards, addWard, editWard, deleteWard}