import React from 'react';
import boatData from './BoatData.module.css';


const BoatData = () => {
    return (
        <div className={boatData.boatData}>
            <div>Лодка</div>
            <div>Мотор</div>
            <div>Эхолот</div>
        </div>
    )
}

export default BoatData;