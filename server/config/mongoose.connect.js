const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost:27018/academy",{
    useNewUrlParser : true,
    useUnifiedTopology: true
})

.then(()=>{console.log("Connection to database Established")})
.catch((err)=>{
    console.log("Error Connecting to database",err)
})