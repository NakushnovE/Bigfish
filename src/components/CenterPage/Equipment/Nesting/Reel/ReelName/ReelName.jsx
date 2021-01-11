import React from 'react';
import reelName from './ReelName.module.css';
import {NavLink} from "react-router-dom";

const ReelNameItem = (props) => {

    return (
        <div>
            <NavLink to={'/reel/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const ReelName = (props) => {

    let reelItem = props.reelItems.map(props => <ReelNameItem id={props.id} name={props.name} />);
    let newReelElement = React.createRef();

    let addReel = () => {
        props.addReel();
    }

    let onReelChange = () => {
        let text = newReelElement.current.value;
        props.updateNewReelItem(text);
    };
    return (
        <div className={reelName.reelName}>
            <div>
                {reelItem}
            </div>
            <div>
                <button onClick={addReel}> Add reel </button>
            </div>
            <div>
                <textarea onChange={onReelChange} ref={newReelElement} value={props.newReelItem}/>
            </div>
        </div>
    )
}

export default ReelName;