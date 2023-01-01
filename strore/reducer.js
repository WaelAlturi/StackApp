import {GET_CHARECTERS,GET_Continents} from './actions';

const initial = {};

export default (state = initial,action) => {
    switch (action.type) {
        case GET_CHARECTERS:
            return {
                ...state,
                chareacters: action.data,
            }
        case GET_Continents:
            return {
                ...state,
                continents: action.data,
            }
        default:
            return state;
    }
}