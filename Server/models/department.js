const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    id : Number,
    name : String,
    description : String,
    hod : String
})

module.exports = mongoose.model('department',departmentSchema,'departments');