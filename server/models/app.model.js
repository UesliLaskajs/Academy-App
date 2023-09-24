const mongoose=require("mongoose")

const AppSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a Name"]
    },
    email:{
        type: String ,
        required : [ true ,"please provide an Email"]
    },
    password:{
        type:String,
        required:[true,'Password is Required']

    },
    image:{
        type:String,
        required:[true,'Please add An img Url']
    }
    role:{
        type:String,
        required:[true,'Please select a role']
        enum: ['teacher', 'Option2', 'Option3']
    }
})