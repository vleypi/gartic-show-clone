import axios from "axios";
import nookies from 'nookies'

import {socket} from '../auth/AuthLayout'


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
        return errorRedirect
    }
}

export const joinGame = async (props,router) =>{
    try{
        const res = await axios.post('http://localhost:5001/api/game/joinGame', {
            gameid: props.gameid,
            password: props.password
        },{
            withCredentials: true
        })

        return router.replace('/game/'+res.data.game.gameid)
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

        socket.emit('joinGame',res.data)

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

export const getGames = async (ctx) =>{
    try{
        const res = await axios.get('http://localhost:5001/api/game/getGames', {},{
            withCredentials: true
        }) 

        return {
            props: {
                games: res.data
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