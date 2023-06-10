const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true})

const connection = mongoose.connection
connection.once('open', () => {
    console.log('Database connection established successfully.')
})

const tasksRouter = require('./routes/tasks')
const userRouter = require('./routes/user')
const columnFilterRouter = require('./routes/settings')

app.use('/tasks', tasksRouter)
app.use('/users', userRouter)
app.use('/settings/filter', columnFilterRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})