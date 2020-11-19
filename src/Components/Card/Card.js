import React from 'react';

import styles from './Card.module.css';

import { calculateStopsInTravel } from '../../js/calculateStopsInTravel'

export default function Card(props){

    const openModal = () => {
        props.setIndexOfCard(props.index)
        props.setShowModal(true)
    }


    return (
        <div className={styles.card} style={props.gamefyTheme ? {fontSize:'10px'} : null} onClick={openModal}>
            <p className={styles.p}><strong>Name:</strong> {props.data.name}</p>
            <p className={styles.p}><strong>Speed:</strong> {props.data.MGLT === 'unknown' ? 'Not Informed' : props.data.MGLT + ' MGLT'} </p>
            <p className={styles.p}><strong>Consumables:</strong> {props.data.consumables === 'unknown' ? 'Not Informed' : props.data.consumables}</p>
            <p className={styles.p}><strong>Number of Stops:</strong> {calculateStopsInTravel(props.megalights, props.data.MGLT, props.data.consumables)} </p>
        </div>
    )
}