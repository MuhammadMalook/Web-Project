const mongoose = require('mongoose');
const { ObjectId} = mongoose.Schema.Types;

const spareSchema = new mongoose.Schema({ 
    
    name:{
        type: String,
        required: true
    },
	carName:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required:true
    },
	price:{
        type: String,
        required:true
    },  

})
mongoose.model('Spare',spareSchema);