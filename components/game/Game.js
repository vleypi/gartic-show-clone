import React from 'react'
import Canvas from './canvas/Canvas'
import styles from '../../styles/game.module.css'
import Leaderboard from './leaderboard/Leaderboard'
import Chat from './chat/Chat'
import Word from './word/Word'

const Game = ({game}) => {
    return (
        <div className={styles.game}>
            <Canvas />
            <div className={styles.management}>
                <Leaderboard game={game}/>
                <Chat game={game}/>
                <Word game={game}/>
            </div>
        </div>
    )
}

export default Game