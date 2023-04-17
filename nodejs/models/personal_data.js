const mongoose = require ('mongoose')
let studentsSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        Name:String,
        Age:Number,
        Contact:String,
        Location:String
    }
)

module.exports = mongoose.model("personal_data",studentsSchema)