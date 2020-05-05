import React from 'react';

import styles from './Header.module.css';
import coronaImage from '../../images/corona.png'

const Header = () => {
    return (
        <div>
            <img className={styles.logo_corona} src={coronaImage} alt="Corona Vírus"/>
        </div>
    )
}


export default Header;