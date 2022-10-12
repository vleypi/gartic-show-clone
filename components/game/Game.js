import React from 'react'
import Canvas from './canvas/Canvas'
import styles from '../../styles/game.module.css'
import Leaderboard from './leaderboard/Leaderboard'
import Chat from './chat/Chat'
import Word from './word/Word'

const Game = () => {
    return (
        <div className={styles.game}>
            <Canvas />
            <div className={styles.management}>
                <Leaderboard />
                <Chat />
                <Word />
            </div>
        </div>
    )
}

export default Game