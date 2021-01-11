import spinningReducer from "./spinning-reducer";
import reelReducer from "./reel-reducer";


let  store = {
    _state: {
        spinElements: {
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
        },
        reelElements: {
            reelItems: [
                {id: 11, name: 'SpeedFaer'},
                {id: 12, name: 'CrossFaer'},
                {id: 13, name: 'RevrosS'},
                {id: 14, name: 'Regal'},
            ],
            newReelItem: 'reel',
        }
    },
    _callSubscriber(){
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.spinElements = spinningReducer(this._state.spinElements, action);
        this._state.reelElements = reelReducer(this._state.reelElements, action);

        this._callSubscriber(this._state);
    }

};







export default store;
window.store = store;