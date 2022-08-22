import axios from "axios";

export const createGame = async (props) =>{
    try{
        const res = await axios.post('http://localhost:5001/api/game/createGame', {
            userid: props.userid,
            name: props.name,
            gameid: props.gameid
        },{
            withCredentials: true
        })

        return props.router.replace('/game/'+res.data.gameid)
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

