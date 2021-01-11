import React from 'react';
import spinningName from './SpinningName.module.css';
import {NavLink} from "react-router-dom";

const SpinningNameItem = (props) => {
    return (
        <div>
            <NavLink to={'/spinning/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const SpinningName = (props) => {

    let spinningItem = props.spinningItems.map(props => <SpinningNameItem id={props.id} name={props.name} />);
    let newSpinElement = React.createRef();

    let onAddSpin = () => {
        props.addSpin();
    }
    let onSpinChange = () => {
        let text = newSpinElement.current.value;
        props.updateNewSpinItem(text);

    }
        return (
        <div className={spinningName.spinningName}>
            <div>
                {spinningItem}
            </div>
            <div>
                <button onClick={onAddSpin}> Add spin </button>
            </div>
            <div>
                <textarea onChange={onSpinChange} ref={newSpinElement} value={props.newSpinItem} />
            </div>
        </div>
        )
    }

export default SpinningName;