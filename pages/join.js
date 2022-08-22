import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Join from '../components/Join/Join'
import {useRouter } from 'next/router'

const Index = ({p}) =>{

    return(
        <div className="index">
            <Join />
        </div>
    )
}


export default Index