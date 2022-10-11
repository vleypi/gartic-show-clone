import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles/create.module.css'
import { createGame } from '../../controllers/gameController'
import { useRouter } from 'next/router'

const Create = () => {

    const profile = useSelector(({profile})=>profile)

    const router = useRouter()

    const [input,setInput] = useState({
        timer: 60,
        password: '',
        name: '',
        ownWords: true,
    })

    const inputHandler = (e) =>{
        setInput({...input,[e.target.name]: e.target.value})
    }

    return (
        <div className={styles.create}>
            <div className={styles.createHeader}>
                <h1>Привет, {profile.name}!</h1>
                <p>Создай свою комнату, чтобы рисовать с друзьями</p>
            </div>
            <div className={styles.settings}>
                <div className={styles.name}>
                    <p>Название комнаты</p>
                    <input
                        onChange={inputHandler} 
                        value={input.name} 
                        name="name"
                    />
                </div>
                <div className={styles.password}>
                    <p>Пароль комнаты</p>
                    <input 
                        onChange={inputHandler} 
                        value={input.password} 
                        name="password"
                    />
                </div>
                <div className={styles.time}>
                    <p>Время на раунд</p>
                    <input 
                        onChange={inputHandler} 
                        value={input.timer} 
                        type='range' max='240' min='60' step='10'
                        name="timer"
                    />
                    <p>{input.timer}</p>
                </div>
                {/* <div className={styles.words}>
                    <p>Свои слова:</p>
                    <input 
                        onChange={inputHandler} 
                        type='checkbox' 
                        value={input.ownWords}
                        name="ownWords"
                    />
                </div> */}
                <div className={styles.createBtn}>
                    <button onClick={()=>createGame(input,router)}>Создать</button>
                </div>
            </div>
        </div>
    )
}

export default Create