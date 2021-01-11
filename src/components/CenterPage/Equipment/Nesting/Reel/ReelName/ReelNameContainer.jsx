import React from 'react';
import {addReelActionCreator, updateNewReelItemActionCreator} from "../../../../../../redax/reel-reducer";
import ReelName from "./ReelName";
import StoreContext from "../../../../../../StoreContext";

const ReelNameContainer = (props) => {

    return (
    <StoreContext.Consumer>
        { store => {
            let state = store.getState();
            let onAddReel = () => {
               store.dispatch(addReelActionCreator());
            }
            let onReelChange = (text) => {
                let action = updateNewReelItemActionCreator(text);
                store.dispatch(action);
            }

            return <ReelName updateNewReelItem={onReelChange}
                             addReel={onAddReel}
                             reelItems={state.reelElements.reelItems}
                             newReelItem={state.reelElements.newReelItem}/>
        }
        }
    </StoreContext.Consumer>
    )
}


export default ReelNameContainer;