const db = require("../models");
const Student = db.students;
//add formation
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a Tutorial
    const student = new Student({  
      name:req.body.name,        
        email:req.body.email,
        password:req.body.password,      

    });
  
    // Save Tutorial in the database
    student
      .save(student)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating th."
        });
      });
  };

//afficher liste de formations
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {name: {$regex : new RegExp(name), $options: "i"}} :{};
    Student.find(condition).then(data => {res.send(data);
    }).catch(err =>{
        res.status(500).send({message:err.message || "data not founded."});
        
    }); 
}
    //find only formation
    exports.findOne = (req, res) => {
        const id = req.params.id;
        Student.findById(id).then(data =>{
            if(!data) 
              res.status(400).send({message:"formation trouvé"});
         res.send(data);
        })
        .catch(err =>{
            res.status(500).send({message:"formation non trouveé avec id="+ id});
        });        
    }
//delete admine by id
exports.delete = (req, res) => {
const id = req.params.id;
Student.findByIdAndDelete(id)
.then(data =>{
  if(!data) {
    res.status(404).send ({
      message:`can not delete with id=${id}`
    });  }
  else res.send ({
    message:"admin id deleted"
  })
})
.catch(err => {
  res.status(500).send({
    message:"error deleting admin with id=" + id
  });
});
}
// delete all admin
exports.deleteAll = (req,res) => {
Student.deleteMany ({})
.then(data =>{
res.send({
  message:`${data.deleteCount} all admins is deleted`
});
})
.catch(err =>{
  res.status(500).send({
    message:err.message || "error deleting all admin"
  })
} )
}
//update admin by id
exports.update = (req,res) => {
 if(!req.body) {
  return res.status(400).send({
    message:"data can not be empty"
  });
 }  
const id = req.params.id;
Student.findByIdAndUpdate(id, req.body, {studentFindAndUpdate:false})

.then(data =>{
  if(!data) {
    res.status(400).send ({
      message:`can not update with id=${id}`
    });
  }
  else res.send ({
    message:"admin id updated"
  })
})
.catch(err => {
  res.status(500).send({
    message:"error updating admin with id=" + id
  });
});

}