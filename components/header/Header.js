import { useSelector } from 'react-redux'
import styles from '../../styles/header.module.css'
import {useDispatch} from 'react-redux'
import { setVisible as setSignInVisible} from '../../redux/slices/signin'

const Header = () => {
    const profile = useSelector(({profile})=>profile)
    const preloader = useSelector(({preloader})=>preloader.preloader)

    const dispatch = useDispatch()

    const signInHandler = () =>{
        dispatch(setSignInVisible({type: 'signin'}))
    }

    return (
        <div className={styles.header}>
            {!preloader &&   
                <>
                    <div className={styles.logo}>
                        Paint.io
                    </div>

                    {!profile.name ?
                        <div>
                            <button className={styles.signin} onClick={signInHandler}> 
                                войти
                            </button>
                        </div> :
                        <p>
                            {profile.name}
                        </p>
                    }
                </>
            }
        </div>
    )
}

export default Header