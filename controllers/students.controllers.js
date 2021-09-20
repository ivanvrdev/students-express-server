const ctrlStudents = {};
const Student = require('../models/students.model');

//GET
ctrlStudents.allStudents = async (req, res)=>{
    const students = await Student.find({active: true})
    res.json(students)
}

//POST
ctrlStudents.newStudent = async (req, res)=>{
    const {informacion} = req.body;
    const student = new Student({informacion, active: true});
    await student.save()
    .then(()=>res.json({
        message: 'User created succesfully!',
        student
    }))
    .catch((e)=>{
        res.json({message: 'An error has ocurred! Try it again later...'});
        console.log(e);
    })
}

module.exports = ctrlStudents;