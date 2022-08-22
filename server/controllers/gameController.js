const Game = require('../schema/game')

class GameController {

    async getGame (req,res){
        try{

        }
        catch(err){
            return res.status(404).json({message: 'Bad request'})
        }
    }

    async createGame (req,res){
        try{
            const game = await Game.findOne({gameid: req.body.gameid})

            if(game){
                return res.status(404).json({message: 'This game already exists'})
            }

            const newGame = new Game({
                gameid: req.body.gameid,
                users: [
                    {userid: req.body.userid, name: req.body.name}
                ]
            })

            await newGame.save()
            return res.status(200).json({gameid: req.body.gameid})
        }
        catch(err){

            return res.status(404).json({message: 'Bad request'})
        }
    }

}

module.exports = new GameController()