const router = require('express').Router()
const settings = require('../models/settings.model')

let { ColumnFilter } = settings

router.route('/').get((req, res) => {
  ColumnFilter.find()
    .then(filters => res.json(filters))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const newFilter = new ColumnFilter()

  newFilter.name = req.body.name
  newFilter.showCategory = req.body.showCategory
  newFilter.showPriority = req.body.showPriority
  newFilter.showUser = req.body.showUser
  newFilter.showOption = req.body.showOption

  newFilter.save()
    .then(() => res.json('Filter is Added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  ColumnFilter.findById()
    .then(filter => {
      filter.name = req.body.name
      filter.showCategory = req.body.showCategory
      filter.showPriority = req.body.showPriority
      filter.showUser = req.body.showUser
      filter.showOption = req.body.showOption

      filter.save()
        .then(() => res.json('Filter Updated'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
})

router.route('/update/:filter/:id').post((req, res) => {
  ColumnFilter.findById(req.params.id)
      .then(filter => {
          filter[req.params.filter] = req.body[req.params.filter]

          filter.save()
              .then(() => res.json(`Filter Updated!`))
              .catch(err => res.status(400).json('Error: ' + err))
      })
      .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router