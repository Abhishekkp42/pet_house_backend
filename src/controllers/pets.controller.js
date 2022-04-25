const express = require('express');
const router = express.Router();

const PetService = require('../models/pets.model')

router.get('',async(req,res) => {
    try {
        const petService = await PetService.find().lean().exec();
        return res.send(petService)
    } catch (error) {
        return res.send('error',error.message)
        
    }
})
router.get('/:id',async(req,res) => {
    try {
        const petService = await PetService.findById(req.params.id).lean().exec();
        return res.send(petService)
    } catch (error) {
        return res.send('error',error.message)
        
    }
})
router.post('',async(req,res) => {
    try {
        const petService = await PetService.create(req.body);
        return res.status(201).send(petService)
    } catch (error) {
        return res.send('error',error.message)
        
    }
})


module.exports = router