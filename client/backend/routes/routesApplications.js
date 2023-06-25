const router = require('express').Router
let Application = require('../models/applications')

router.route('/').get((req, res) => {
    Application.find()
    .then(applications => res.json(applications))
    .catch(err => res.status(400).json(err))
})

module.exports = router 