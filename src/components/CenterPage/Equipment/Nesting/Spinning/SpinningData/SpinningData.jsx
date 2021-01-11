import React from 'react';
import spinningData from './SpinningData.module.css';


const SpinCharacteristics = (props) => {

        return (
        <div>
            <div>Длина: </div>
            <div>Тест: </div>
        </div>
    )
}


const SpinningData = (props) => {


    return (
        <div className={spinningData.spinningData}>
            <h3>Характеристики</h3>
            <div className={spinningData.listCharacteristics}>

                <SpinCharacteristics />
                <div>Ссылка</div>
            </div>
        </div>

    )
}

export default SpinningData;