import { useState } from 'react'
import styles from '../../styles/auth.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../redux/slices/profile'
import { useRouter } from 'next/dist/client/router'

const Auth = () => {

    const dispatch = useDispatch()

    const name = useSelector(({profile})=>profile.name)

    const router = useRouter()

    const [input,setInput] = useState(name || '')

    const nameHandler = (e) =>{
        setInput(e.target.value)
    }

    const apply = () =>{
        if(input){
            dispatch(setName(input))
            router.push('/join')
        }
        else{
            dispatch(setName(input))
        }
    }

    return (
        <div className={styles.auth}>
            <h2 className={styles.header}>Set Your name</h2>
            <input className={styles.nameInput} value={input} onChange={nameHandler}/>
            <button onClick={apply} className={styles.applyButton}> Apply </button>
        </div>
    )
}

export default Auth