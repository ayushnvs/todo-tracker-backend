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

router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.name = req.body.name
            task.description = req.body.description
            if (req.body.updates !== '') task.updates.push(req.body.updates)
            task.category = req.body.category
            task.username = req.body.username
            task.status = req.body.status
            task.priority = req.body.priority

            task.save()
                .then(() => res.json('Task Updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
})

module.exports = router