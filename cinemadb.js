const mongoose = require('mongoose');

//define schema here
const cin_schema=mongoose.Schema({

    id : {
        type : Number ,
        required : true

    },
    name : {
        type : String,
        required : true

    },
    location : {
        type : String,
        required : true

    },
    capacity : {
        type : Number,
        required : true

    },
    reserved : {
        type : Number,
        required : true

    },
    
    goldPrice: {
        type : Number,
        required : true

    },
    silverPrice: {
        type : Number,
        required : true

    },
    rating : {
        type : Number,
        required : true

    },
    image : {
        data : Buffer,
        contentType : String
       

    },
    description : {
       
        contentType : String,
        //required : true 
       

    }


    
});

const cinemadb = module.exports = mongoose.model('cinemadb',cin_schema); 