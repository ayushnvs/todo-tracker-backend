const router = require('express').Router()
let Task = require('../models/task.model')

router.route('/').get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {

    const newTask = new Task()

    newTask.name = req.body.name
    newTask.description = req.body.description
    if (req.body.updates !== '') newTask.updates.push(req.body.updates)
    newTask.category = req.body.category
    newTask.username = req.body.username
    newTask.status = req.body.status
    newTask.priority = req.body.priority
    
    newTask.save()
        .then(() => res.json('Task Added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})