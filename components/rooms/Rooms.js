import React from 'react'
import styles from '../../styles/rooms.module.css'


const Rooms = () => {
    return (
        <div className={styles.rooms}>
            <h1>Комнаты</h1>
            <input placeholder='Поиск комнаты...'/>
            <div className={styles.roomsContainer}>
                <div className={styles.room}>
                    <p>Играем...</p>
                    <div className={styles.roomsInfo}>
                        <div className={styles.playing}></div>
                        <p>1/8</p>
                        <p>Закрытая</p>
                    </div>
                </div>
                <div className={styles.room}>
                    <p>Играем 2...</p>
                    <div className={styles.roomsInfo}>
                        <div className={styles.waiting}></div>
                        <p>3/8</p>
                        <p>Закрытая</p>
                    </div>
                </div>
                <div className={styles.room}>
                    <p>Играем 3...</p>
                    <div className={styles.roomsInfo}>
                        <div className={styles.waiting}></div>
                        <p>6/8</p>
                        <p>Закрытая</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms