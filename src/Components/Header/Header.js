import React, {useState} from 'react';

import styles from './Header.module.css'

import { Switch } from 'antd'

export default function Header(props){
    const [animation, setAnimation] = useState(false)

    const changeGamefyTheme = () => {
        setAnimation(true)
        setTimeout(() => {props.setGamefyTheme(!props.gamefyTheme)} , 1000)
        setTimeout(() => {setAnimation(false)}, 2000)
    }
    
    return (
        <header className={styles.header}>
            <img className={styles.title} src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="logo"  />

            <div className={styles.gamefy}>
                <Switch className={styles.switch} onChange={changeGamefyTheme} style={props.gamefyTheme ? {backgroundColor:'var(--primary)'} : null }/>
                <p className={styles.gamefyText}>Gamefy?</p>
            </div>

            <div className={animation ? styles.cover + ' ' + styles.animation : styles.cover} >
                <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="logo"  />
            </div>
        </header>
    )
}


