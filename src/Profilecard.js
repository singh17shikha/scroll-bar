import React from 'react';
import styles from './Profilecard.module.css';

const Profilecard = (props) => {
return (
<div className={styles.card}>
<img src={props.image} alt="Profile" className={styles.image} />
<h1>{props.name}</h1>
<p>{props.description}</p>
</div>
);
}

export default Profilecard;