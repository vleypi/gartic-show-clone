import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import shortid from "shortid";
import { setUserid } from "../redux/slices/profile";
import {useRouter } from 'next/router'

export const AuthProvider  = (props) => {

    const dispatch = useDispatch()
    const router = useRouter()
    const userid = useSelector(({profile})=>profile.userid)

    useEffect(()=>{
        if(!userid){
            dispatch(setUserid(shortid.generate()))
            router.replace('/')
        }
    },[])

    return (
        <>
            {props.children}
        </>
    );
};

export default AuthProvider;