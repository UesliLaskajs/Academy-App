const app=require("../models/app.model")

module.exports.getAllUsers=(req,res)=>{
    app.find()
    .then((allUsers)=>{
        res.json(allUsers);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
    
}

module.exports.getSingleUser=(req,res)=>{
    app.findOne({_id:req.params.id})
    .then((singleUser)=>{
        res.json(singleUser);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
    
}

module.exports.createUser=(req,res)=>{
    app.create(req.body)
    .then((userCreated)=>{
        res.json(userCreated)
    })
    .catch((err) => {
        res.status(400).json(err);
    })
    
}

module.exports.updateUser=(req,res)=>{
    app.updateOne({_id:req.params.id},req.body,{new:true})
    .then((updateUser)=>{
        res.json(updateUser)
    })
    .catch((err) => {
        res.status(400).json(err);
    })
    
}

module.exports.deleteUser=(req,res)=>{
    app.deleteOne({_id:req.params.id})
    .then((deleteUser)=>{
        res.json(deleteUser)
    })
    .catch((err) => {
        res.status(400).json(err);
    })
    
}
