import axios from 'axios'
import { setProfile } from '../redux/slices/profile'
import { setPreloader } from '../redux/slices/preloader'


export const auth = async (dispatch) =>{
    try{
        const res = await axios.post('http://localhost:5001/api/user/auth', {},{
            withCredentials: true
        })
        dispatch(setProfile(res.data))
        dispatch(setPreloader({preloader: false}))
    }
    catch(err){
        console.log(err)
        if(!err.response.data){
            dispatch(setProfile({name: '',email: '',userid: '',token: ''}))
            dispatch(setPreloader({preloader: false}))
        }
        else if(err.response.data.message === 'UnauthorizedToken'){
            dispatch(setProfile({name: '',email: '',userid: '',token: ''}))
            dispatch(setPreloader({preloader: false}))
        }
        else if(err.response.data.message === 'Unauthorized'){
            refreshTokenAuth(auth,dispatch)
        }
    }
}


export const refreshTokenAuth = async (request,dispatch) =>{
    try{
        await axios.post('http://localhost:5001/api/user/refresh', {},{
            withCredentials: true
        })
        request(dispatch)
    }
    catch(err){
        dispatch(setProfile({name: '',email: '',userid: '',token: ''}))
        dispatch(setPreloader({prealoder: false}))
    }
}

