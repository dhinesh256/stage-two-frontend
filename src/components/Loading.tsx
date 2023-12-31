import React from 'react'
import styles from './loading.module.css'
const Loading = () => {
    return (
        <div className={styles.loadingScreen}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    )
}

export default Loading