import axios from "axios";
import nookies from 'nookies'

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

export const getGameById = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        
        const res = await axios.get('http://localhost:5001/api/game/getGameById', {
            data: {
                acc: cookies.acc,
                ref: cookies.ref,
                gameid: ctx.params.gameid
            }
        },{
            withCredentials: true
        })

        return {
            props: {
                game: res.data
            }
        }
    }
    catch(err){
        return errorRedirect
    }
}

const errorRedirect = {
    redirect: {
        permanent: false,
        destination: "/404",
    }
}