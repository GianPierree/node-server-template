const { Router } = require('express')
const { getTest } = require('../controllers/test')

const router = Router()
const path = '/test'

router.get(path, getTest)

module.exports = router