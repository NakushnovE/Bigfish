import React from 'react';
import heading from './Heading.module.css';
import {NavLink} from "react-router-dom";





const Heading = () => {
    return (
        <div className={heading.heading}>
            <div>
                <NavLink to='/spinning' activeClassName={heading.active}>Спиннинги</NavLink>
            </div>
            <div>
                <NavLink to='/reel' activeClassName={heading.active}>Катушки</NavLink>
            </div>
            <div>
                <NavLink to='/boat' activeClassName={heading.active}>Лодка+</NavLink>
            </div>
            <div>
                <NavLink to='/camping' activeClassName={heading.active}>Кемпинг</NavLink>
            </div>
        </div>
    )
}

export default Heading;