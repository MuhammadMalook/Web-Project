const mongoose = require('mongoose');
const { ObjectId} = mongoose.Schema.Types;
const userSpareSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    nic:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
	carName:{
        type: String,
        required: true
    },
    spareName:{
        type: String,
        required: true
    },

})

mongoose.model("UserSpare",userSpareSchema);