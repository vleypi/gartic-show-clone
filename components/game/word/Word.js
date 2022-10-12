import React from 'react'
import styles from '../../../styles/game.module.css'

const Word = () => {
    return (
        <div className={styles.word}>
            <p className={styles.statement}>Введите слово</p>
            <div className={styles.enterWord}>
                <input />
                <button>Ввести</button>
            </div>
        </div>
    )
}

export default Word