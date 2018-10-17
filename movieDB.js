const mongoose = require('mongoose');

//define schema here
const movie_schema=mongoose.Schema({

    id : {
        type : Number ,
        required : true

    },
    title : {
        type : String,
        required : true

    },
    genre : {
        type : [String],
        required : true

    },
    language : {
        type : String,
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

const movieDB = module.exports = mongoose.model('movieDB',movie_schema); 