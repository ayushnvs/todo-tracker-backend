const mongoose = require('mongoose')

const Schema= mongoose.Schema

const taskSchema = new Schema({
    name: {type: String, required: true},
    description: String,
    updates: [String],
    category: String,
    username: {type: String, required: true},
    status: {type: String, required: true},
    priority: {type: String, require: true}
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task