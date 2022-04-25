const mongoose = require('mongoose');

const petServiceSchema = mongoose.Schema({
    PetServiceName:{type:String,required:true},
    PetServiceCity:{type:String,required:true},
    PetServiceAddress:{type:String,required:true},
    PetServiceCapacity:{type:Number,required:true},
    PetServiceCost:{type:Number,required:true},
    PetServiceVerified:{type:Boolean,required:true},
    PetServiceRating:{type:Number,required:true},
    PetServiceWatched:{type:Number,required:true},
    PetServiceSleep:{type:String,required:true},
    PetServiceWalks:{type:Number,required:true},

},{
    timestamps:true,
    versionKey:false
})

const PetService = mongoose.model('petServicelist',petServiceSchema)
module.exports = PetService