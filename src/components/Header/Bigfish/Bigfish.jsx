import React from 'react';
import bigfish from './Bigfish.module.css';


const Bigfish = () => {
    return (
        <div>
            <a href="/bigfish"> <img className={bigfish.bigfish}
                                    src='https://spec-offers-static.windyapp.co/Krasnodar.Trophy%20Carp.png'/> </a>
        </div>
    )
}

export default Bigfish;