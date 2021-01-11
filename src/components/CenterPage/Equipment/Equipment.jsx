import React from 'react';
import equipment from './Equipment.module.css';
import Heading from "./Heading/Heading";
import Boat from "./Nesting/Boat/Boat";
import Reel from "./Nesting/Reel/Reel";
import Spinning from "./Nesting/Spinning/Spinning";
import Camping from "./Nesting/Сamping/Camping";
import {BrowserRouter, Route} from "react-router-dom";


const Equipment = (props) => {
    return (
        <BrowserRouter>
            <div className={equipment.equipment}>
                <Heading/>
                <div class='equipmentNesting'>
                    <Route path='/boat' component={Boat}/>
                    <Route path='/reel' render={ () => <Reel />  }/>
                    <Route path='/spinning' render={ () => <Spinning />  }/>
                    <Route path='/camping' component={Camping}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Equipment;