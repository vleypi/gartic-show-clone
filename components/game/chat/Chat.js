import React from 'react'
import styles from '../../../styles/game.module.css'

const Chat = () => {
    return (
        <div className={styles.chat}>
            <div className={styles.messages}>

            </div>
            <div className={styles.send}>
                <input />
                <button>отправить</button>
            </div>
        </div>
    )
}

export default Chat