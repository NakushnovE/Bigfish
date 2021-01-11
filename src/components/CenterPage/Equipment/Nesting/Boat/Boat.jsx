import React from 'react';
import boat from './Boat.module.css';


const Boat = () => {
    return (
        <div className={boat.boat}>
            <div>Лодка</div>
            <div>Мотор</div>
            <div>Эхолот</div>
        </div>
    )
}

export default Boat;