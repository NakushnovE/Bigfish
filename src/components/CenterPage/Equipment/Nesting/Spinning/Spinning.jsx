import React from 'react';
import spinning from './Spinning.module.css';
import SpinningData from "./SpinningData/SpinningData";
import SpinningNameContainer from "./SpinningName/SpinningNameConteiner";



const Spinning = (props) => {

    return (
        <div className={spinning.spinning}>
            <SpinningNameContainer />

            <SpinningData />
        </div>
    )
}

export default Spinning;