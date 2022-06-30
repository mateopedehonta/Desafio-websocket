const { Router } = require('express')
const router = Router()
const {addProducts,client} = require('../controllers/Controllers')


router.post('/productos',addProducts)

router.get("/",client)


module.exports = router