import React from 'react';

import { Favorite } from '@material-ui/icons';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <span>
                Desenvolvido com 
                <Favorite className={styles.icon_favorite}/>
                por <strong>Evoluti<span className={styles.red}>o</span>n</strong>
            </span> 
        </div>
    )
}

export default Footer;