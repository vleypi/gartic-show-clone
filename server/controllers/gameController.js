const Game = require('../schema/game')
const User = require('../schema/user')
const shortid = require('shortid')

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
            const {password,name,timer} = req.body
            
            console.log(req.user.id)

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