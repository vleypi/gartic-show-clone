import React, { useState } from 'react'
import styles from '../../../styles/game.module.css'

const Leaderboard = ({game}) => {

    const [users,setUsers] = useState(game.users)

    return (
        <div className={styles.leaderboard}>
            <div className={styles.leaders}>
                {users.map((user,index)=>(
                    <div className={styles.user} key={user.userid}>
                        <p className={styles.name} style={{color: user.color}}>{index+1}. {user.name}</p>
                        <p className={styles.pts}>{user.pts} pts</p>
                    </div>
                ))}
                {Array(5 - users.length).fill(
                    <div className={styles.user}>
                        <p className={styles.name}></p>
                        <p className={styles.pts}></p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Leaderboard