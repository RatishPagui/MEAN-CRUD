const mongoose = require ('mongoose')
let studentsSchema1 = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name:String,
        age:String,
        dob:String,
        email:String,
        contact:String,
        location:String
    }
)

module.exports = mongoose.model("employee_data",studentsSchema1)