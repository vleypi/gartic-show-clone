const Router = require('express')

const router = new Router()
const gameController = require('../controllers/gameController')

router.get('/getPostPageById',gameController.getGame)
router.post('/createGame',gameController.createGame)

module.exports = router