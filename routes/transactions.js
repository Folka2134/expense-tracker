const express = require('express')

const router = express.Router()

router.ger("/", (req, res) => {
    res.send('hello w')
})

module.exports = router