import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => { 
    let login = <NavigationItem link="/auth">Login / Signup</NavigationItem>;
    if (props.isAuth) {
        login = <NavigationItem link="/logout">Logout</NavigationItem>;
    }

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
            {login}
        </ul>
    );
};

export default navigationItems;