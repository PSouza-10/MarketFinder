const router = require('express').Router()
const sessionRoutes = require('./sessionRoutes')

router.use('/user', sessionRoutes)
router.get('/', (req, res) => { return res.send("Ola Mundo") })
module.exports = router