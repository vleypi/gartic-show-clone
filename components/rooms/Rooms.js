import Link from 'next/link'
import React from 'react'
import styles from '../../styles/rooms.module.css'
import { useState } from 'react'
import { joinGame } from '../../controllers/gameController'
import { useRouter } from 'next/router'

const Rooms = ({games}) => {

    const [rooms,setRooms] = useState(games)
    const router = useRouter()

    return (
        <div className={styles.rooms}>
            <div className={styles.roomsHeader}>
                <h1>Комнаты</h1>
                <Link href='/create'><a>Создать</a></Link>
            </div>
            <input placeholder='Поиск комнаты...'/>
            <div className={styles.roomsContainer}>
                {rooms.map((m)=>(
                    <div className={styles.room} onClick={()=>joinGame({gameid: m.gameid,password: ''},router)}>
                        <p>{m.name}</p>
                        <div className={styles.roomsInfo}>
                            <div className={m.playing ? styles.playing : styles.waiting}></div>
                            <p>{m.users.length}/8</p>
                            <p>{m.password ? 'Закрытая' : 'Открытая'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rooms