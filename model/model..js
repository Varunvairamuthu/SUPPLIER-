const mongoose = require('mongoose');

const SuppliersSchema = new mongoose.Schema({
    branchId:{
        type:String,
        required:true
    },
    branchName:{
        type:String,
        required:true
    },
    branchLocation:{
        type:String,
        required:true
    },
    name:{
        type:String,
        unique:[true],
        required:true,
        maxlength:[50]
    },
    date:{
        type:String,
        required:true
    },
    billAddress:{
        type:String,
        required:true
    },
    shipAddress:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
	alternateNumber:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
},{timestamps:true});

 module.exports = mongoose.model('Suppliers',SuppliersSchema)