const mongoose = require('mongoose');
const { ObjectId} = mongoose.Schema.Types;
const userCarSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },

    email:{
        type: String,
        required: true
    },

    nic:{
        type: String,
        required: true
    },
	phone:{
        type: String,
        required: true
    },
	carName:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    
    

})

mongoose.model("UserCar",userCarSchema);