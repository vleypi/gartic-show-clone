const Router = require('express')

const router = new Router()
const gameController = require('../controllers/gameController')
const auth = require('../mw/auth.mw')
const auth02 = require('../mw/auth02.mw')

router.get('/getGameById',auth02,gameController.getGameById)
router.get('/getGames',gameController.getGames)
router.post('/joinGame',auth,gameController.joinGame)
router.post('/createGame',auth,gameController.createGame)

module.exports = router