import React from 'react';
import reel from './Reel.module.css';
import ReelData from "./ReelData/ReelData";
import ReelNameContainer from "./ReelName/ReelNameContainer";



const Reel = (props) => {
    return (
        <div className={reel.reel}>
            <ReelNameContainer  />
            <ReelData  />
        </div>
    )
}

export default Reel;