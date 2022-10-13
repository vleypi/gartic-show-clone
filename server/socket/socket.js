const Game = require('../schema/game')


module.exports = (socket) =>{
    
    socket.on('joinGame',async (msg)=>{
        try{
            const {user,game} = msg

            socket.join(game.gameid)

            if(!user.userid === game.owner){

                await Game.updateOne({_id: game._id},{$push: {"users": {
                    name: user.name,
                    userid: user.userid,
                    pts: 0,
                    color: '#aeaefa'
                }}})

                game.users.push({
                    name: user.name,
                    userid: user.userid,
                    pts: 0,
                    color: '#aeaefa'
                })

                socket.to(game.gameid).emit('joinedGame',game)
            }
        }
        catch(err){
            console.log(err)
        }
    })

    socket.on('disconnect',()=>{
        console.log('disconnect')
    });
}