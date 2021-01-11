import React from 'react';
import {addSpinActionCreator, updateNewSpinItemActionCreator} from "../../../../../../redax/spinning-reducer";
import SpinningName from "./SpinningName";
import StoreContext from "../../../../../../StoreContext";

const SpinningNameContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();
                let onAddSpin = () => {
                   store.dispatch(addSpinActionCreator());
                }
                let onSpinChange = (text) => {
                    let action = updateNewSpinItemActionCreator(text);
                   store.dispatch(action);
                }
                return <SpinningName updateNewSpinItem={onSpinChange}
                                     addSpin={onAddSpin}
                                     spinningItems={state.spinElements.spinningItems}
                                     newSpinItem={state.spinElements.newSpinItem}/>
            }
            }
        </StoreContext.Consumer>
    )
};

export default SpinningNameContainer;