import { CLOSE_MODAL, OPEN_MODAL } from '../actionConstants';

const initialState = {
    showModal: false,
    message: '',
};

/*
 * {@type: String, @payload: {Object} } action
 */

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                showModal: true,
                message: action.payload.errorMessage,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                showModal: false,
                message: '',
            };
        default:
            return state;
    }
};

export default modalReducer;
