import React from 'react';
import styles from './Scrolbar.module.css';

const Scrolbar = (props) => {
return (
<div className={styles.scrollbar}>
{props.children}
</div>
);
}

export default Scrolbar;