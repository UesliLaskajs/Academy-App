const appController=require("../controllers/app.controllers")

module.exports=(app)=>{
    app.get("/users",appController.getAllUsers)
    app.get("/users/:id",appController.getSingleUser)
    app.post("/users/new",appController.createUser)
    app.patch("/users/edit/:id",appController.updateUser)
    app.delete("/users/delete/:id",appController.deleteUser)
}

