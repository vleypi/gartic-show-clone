const Game = require('../schema/game')
const User = require('../schema/user')
const shortid = require('shortid')

class GameController {

    async getGameById (req,res){
        try{
            const game = await Game.findOne({gameid: req.body.gameid})

            if(!game){
                return res.status(404).json({message: 'Bad request'})
            }
            
            const user = await User.findOne({_id: req.user.id})

            if(!user){
                return res.status(404).json({message: 'Bad request'})
            }
            if(!game.users.filter(u=>u.userid === user.userid)){
                return res.status(404).json({message: 'Bad request'})
            }

            return res.status(200).json({game: game})
        }
        catch(err){
            return res.status(404).json({message: 'Bad request'})
        }
    }

    async createGame (req,res){
        try{
            const {password,name,timer} = req.body

            const user = await User.findOne({_id: req.user.id})


            if(!user){
                return res.status(404).json({message: 'Bad request'})
            }

            const newGame = new Game({
                gameid: shortid.generate(),
                name,
                password,
                timer,
                users: [{
                    userid: user.userid,
                    name: user.name
                }],
                ownWords: true
            })
            await newGame.save()

            return res.status(200).json({newGame})
        }
        catch(err){
            console.log(err)
            return res.status(404).json({message: 'Bad request'})
        }
    }

}

module.exports = new GameController()