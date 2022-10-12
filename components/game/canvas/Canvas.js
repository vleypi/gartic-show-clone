import React from 'react'
import CanvasDraw from "react-canvas-draw";
import styles from '../../../styles/game.module.css'

const Canvas = () => {


    return (
        <CanvasDraw 
                brushColor={'#000000'}
                brushRadius={5}
                lazyRadius={5}
                className={styles.canvas}
                canvasWidth={1410}
                canvasHeight={928}
        />
    )
}

export default Canvas