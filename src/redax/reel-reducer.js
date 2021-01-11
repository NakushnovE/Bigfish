const ADD_REEL = 'ADD-REEL';
const UPDATE_NEW_REEL_ITEM = 'UPDATE-NEW-REEL-ITEM';

let initialState = {
         reelItems: [
            {id: 11, name: 'SpeedFaer'},
            {id: 12, name: 'CrossFaer'},
            {id: 13, name: 'RevrosS'},
            {id: 14, name: 'Regal'},
        ],
        newReelItem: 'reel',
    }


const reelReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REEL:
            let newReel = {id: 15, name: state.newReelItem}
            state.reelItems.push(newReel)
            state.newReelItem = '';
            return state;
        case UPDATE_NEW_REEL_ITEM:
            state.newReelItem = action.newReelItem;
            return state;
        default:
            return state;
    }
}

export const addReelActionCreator = () => ({type: ADD_REEL})
export const updateNewReelItemActionCreator = (text) =>
    ({type: UPDATE_NEW_REEL_ITEM, newReelItem: text })

export default reelReducer;