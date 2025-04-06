const mongoose= require('mongoose')

const mongooseSchema = new mongoose.Schema({
     
     pid : {
        type:String,
        required : [true,'id is mandatory']
     },
     
     name :{
        type : String,
        required :[true,'name is mandatory']
     },

     category :{
        type : String,
        required :[true,'category is mandatory']
     },

     quantity :{
        type: Number,
        required :[true,'quantity is must and should']
     },
     imgpath :{
       type : String ,
       required :[true,'img path is mandatory']
     }
})


module.exports = mongoose.model("Product",mongooseSchema);