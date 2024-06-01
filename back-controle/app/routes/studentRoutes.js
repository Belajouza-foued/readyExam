module.exports = app => {
    const students = require("../controllers/studentsControllers");  
    var router = require("express").Router();  
    // Create a new admin
    router.post("/", students.create);  
    // Retrieve all admin
    router.get("/", students.findAll);      
    // Retrieve a single admin with id
    router.get("/:id", students.findOne);
  //Update admin with id
  router.put("/:id", students.update);
  //delete admin with id
  router.delete("/:id",students.delete);
  //delete all admins
  router.delete("/",students.deleteAll)
    app.use('/api/students', router);
  };
  