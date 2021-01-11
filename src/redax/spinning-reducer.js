const ADD_SPIN = 'ADD-SPIN';
const UPDATE_NEW_SPIN_ITEM = 'UPDATE-NEW-SPIN-ITEM';

let initialState = {
            spinningItems: [
            {id: 1, name: 'Daiwa 1'},
            {id: 2, name: 'Daiwa 2'},
            {id: 3, name: 'Shimano'},
            {id: 4, name: 'Daiwa 4'}
        ],
        newSpinItem: 'spin',
        spinCharacteristics: [
            {id: 1, lengthSpin: 4.0, test: '10-30'},
            {id: 2, lengthSpin: 3.9, test: '15-45'},
            {id: 3, lengthSpin: 3.6, test: '4-21'},
            {id: 4, lengthSpin: 3.96, test: '50-100'}
        ]
    };

const spinningReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SPIN:
            let newSpin = {id: 5, name: state.newSpinItem}
            state.spinningItems.push(newSpin)
            state.newSpinItem = '';
            return state;
        case UPDATE_NEW_SPIN_ITEM:
            state.newSpinItem = action.newSpinItem;
            return state;
        default:
            return state;
    }
}

export const addSpinActionCreator = () => ({type: ADD_SPIN})
export const updateNewSpinItemActionCreator = (text) =>
    ({type: UPDATE_NEW_SPIN_ITEM, newSpinItem: text })

export default spinningReducer;