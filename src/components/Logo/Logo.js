import React from 'react';

import burgerLogo from '../../assets/images/original.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div class={classes.Logo}>
        <img src={burgerLogo} alt="Burger Builder" />
    </div>
);

export default logo;