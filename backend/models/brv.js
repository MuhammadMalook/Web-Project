const mongoose = require('mongoose');
const { ObjectId} = mongoose.Schema.Types;
const brvSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
	model:{
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
    }
})
mongoose.model('Brv',brvSchema);