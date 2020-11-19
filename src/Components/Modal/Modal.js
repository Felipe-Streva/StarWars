import React from 'react';

import styles from './Modal.module.css';

export default function Modal(props) {
    return (
        <div className={styles.screen}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{props.data.name}</h3>

                    <h2 className={styles.close} onClick={() => {props.setShowModal(false)}} > X </h2>
                </div>

                <div className={styles.infos}>
                    <p> Model: {props.data.model} </p>
                    <p> Cost: {props.data.cost_in_credits} credits </p>
                    <p> Length: {props.data.length} meters </p>
                    <p> Speed: {props.data.MGLT === 'unknown' ? 'Not Informed' : props.data.MGLT + 'MGLT'} </p>
                    <p> Consumables: {props.data.consumables === 'unknown' ? 'Not Informed' : props.data.consumables} </p>
                    
                </div>

                <div className={styles.footer}>
                    <button className={styles.button} onClick={() => {props.setShowModal(false)}} >Close</button>
                </div>
            </div>
        </div>
    )
}