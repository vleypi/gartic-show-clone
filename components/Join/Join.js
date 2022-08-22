import { useState } from 'react'
import styles from '../../styles/join.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../redux/slices/profile'
import { useRouter } from 'next/dist/client/router'
import { createGame } from '../../controllers/gameController'

const Join = () => {

    const profile = useSelector(({profile})=>profile)

    const router = useRouter()

    const [input,setInput] = useState('')

    const inputHandler = (e) =>{
        setInput(e.target.value)
    }

    const create = () =>{
        if(input){
            createGame({
                userid: profile.userid, 
                name: profile.name, 
                gameid: input,
                router
            })
        }
    }

    return (
        <div className={styles.join}>
            <h2 className={styles.header}>{profile.name}</h2>
            <input className={styles.lobbyInput} type='number' onChange={inputHandler} value={input}/>
            <div className={styles.actions} >
                <button onClick={create}>Create</button>
                <button>Join</button>
            </div>
        </div>
    )
}

export default Join