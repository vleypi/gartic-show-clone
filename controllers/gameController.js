import axios from "axios";

export const createGame = async (props,router) =>{
    try{
        const res = await axios.post('http://localhost:5001/api/game/createGame', {
            userid: props.userid,
            name: props.name,
            password: props.password,
            timer: props.timer,
            ownWords: props.ownWord,
        },{
            withCredentials: true
        })

        return router.replace('/game/'+res.data.newGame.gameid)
    }
    catch(err){

    }
}

export const getGame = async (props) =>{
    try{
        const res = await axios.get('http://localhost:5001/api/game/getGame', {
            userid: props.userid,
            name: props.name,
            gameid: props.gameid
        },{
            withCredentials: true
        })
    }
    catch(err){

    }
}

