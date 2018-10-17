const mongoose = require('mongoose');

//define schema here
const time_schema=mongoose.Schema({
time:{
type:Date,
required: true

},
date1:{
    type:Date,
    required:true
},
reservedS:
{
    type:Number,
    required:true
}
});
const movie_schema=mongoose.Schema({

    id1 : {
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
    rating1: {
        type : Number,
        required : true

    },
    image : {
        data : Buffer,
        contentType : String
       

    },
    description1 : {
       
        contentType : String,
        //required : true 
       

    },
    timeS:[time_schema]

    

    
});

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
       

    },
    movList:
    [movie_schema]


    
});

const showtimedb = module.exports = mongoose.model('showtimedb',time_schema); 