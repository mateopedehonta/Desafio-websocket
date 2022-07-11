const { Router } = require('express')
const router = Router()
const {client} = require('../controllers/Controllers')

router.get("/",client)


module.exports = router