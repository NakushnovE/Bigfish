import React from 'react';
import topbar from './Topbar.module.css';
import {NavLink} from "react-router-dom";


const Topbar = () => {
    return (
        <div className={topbar.top}>
            <div>
                <NavLink to="/home" activeClassName={topbar.active}> Главная </NavLink>
            </div>
            <div>
                <NavLink to="/shop" activeClassName={topbar.active}>Магазины</NavLink>
            </div>
            <div>
                <NavLink to="/equipment" activeClassName={topbar.active}>Снаряга</NavLink>
            </div>
            <div>
                <NavLink to="/weather" activeClassName={topbar.active}>Погода</NavLink>
            </div>
        </div>
    )
}

export default Topbar;