import { CLOSE_MODAL, OPEN_MODAL } from '../actionConstants';

const closeModal = () => (dispatch) => {
    dispatch({
        type: CLOSE_MODAL,
    });
};

const openModal = (errMessage) => (dispatch) => {
    dispatch({
        type: OPEN_MODAL,
        payload: {
            errorMessage: errMessage,
        },
    });
};

export { closeModal, openModal };
