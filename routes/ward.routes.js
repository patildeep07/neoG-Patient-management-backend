const {getAllWards, addWard, editWard, deleteWard} = require('../queries/ward.queries');
const express = require('express');

const wardRouter = express.Router()

wardRouter.get('/',async(req,res)=>{
  try{
    const wards = await getAllWards()
    res.status(200).json({message:"fetched wards",wards })
  }catch(err){
    res.status(500).json({message:"error fetching wards" })
  }
})

wardRouter.post('/',async(req,res)=>{
  try{
    const ward = await addWard(req.body)
    res.status(201).json({message:"added ward",ward })
  }catch(err){
    res.status(500).json({message:"error adding ward" })
  }
})

wardRouter.put('/:id',async(req,res)=>{
  try{
    const ward = await editWard(req.params.id,req.body)
    res.status(200).json({message:"updated ward" ,ward})
  }catch(err){
    res.status(500).json({message:"error updating ward" })
  }
})

wardRouter.delete('/:id',async(req,res)=>{
  try{
    const ward = await deleteWard(req.params.id)
    res.status(200).json({message:"deleted ward",ward })
  
  }catch(err){
    res.status(500).json({message:"error deleting ward" })
  }
})

module.exports = wardRouter