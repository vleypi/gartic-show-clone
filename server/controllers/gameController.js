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
            
            if(game.playing){
                return res.status(404).json({message: 'Bad request'})
            }

            const user = await User.findOne({_id: req.user.id},{name: 1,userid: 1})

            if(!user){
                return res.status(404).json({message: 'Bad request'})
            }
            if(game.users.filter(u=>u.userid == user.userid).length < 1){
                return res.status(404).json({message: 'Bad request'})
            }

            return res.status(200).json({game,user})
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
                    name: user.name,
                    pts: 0,
                    color: '#aeaefa'
                }],
                ownWords: true,
                owner: user.userid
            })
            await newGame.save()

            return res.status(200).json({newGame})
        }
        catch(err){
            console.log(err)
            return res.status(404).json({message: 'Bad request'})
        }
    }

    async getGames (req,res){
        try{
            const games = await Game.find().limit(10)
            return res.status(200).json({games})
        }
        catch(err){
            console.log(err)
            return res.status(404).json({message: 'Bad request'})
        }
    }

    async joinGame (req,res){
        try{
            const game = await Game.findOne({gameid: req.body.gameid})

            if(!game){
                return res.status(404).json({message: 'Bad request'})
            }
            
            if(game.playing){
                return res.status(404).json({message: 'Bad request'})
            }

            const user = await User.findOne({_id: req.user.id},{name: 1,userid: 1})

            if(!user){
                return res.status(404).json({message: 'Bad request'})
            }
            if(game.users.filter(u=>u.userid == user.userid).length > 0){
                return res.status(404).json({message: 'Bad request'})
            }

            await Game.updateOne({_id: game._id},{$push: {"users": {
                name: user.name,
                userid: user.userid,
                pts: 0,
                color: '#aeaefa'
            }}})

            return res.status(200).json({game})
        }
        catch(err){
            console.log(err)
            return res.status(404).json({message: 'Bad request'})
        }
    }

}

module.exports = new GameController()