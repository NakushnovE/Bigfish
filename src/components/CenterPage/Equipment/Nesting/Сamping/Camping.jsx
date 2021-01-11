import React from 'react';
import camping from './Camping.module.css';


const Camping = () => {
    return (
        <div className={camping.camping}>
            <div>Палатка</div>
            <div>Шелтер</div>
            <div>Спальник</div>
            <div>Стул</div>
        </div>
    )
}

export default Camping;