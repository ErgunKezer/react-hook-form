import { CLOSE_MODAL, OPEN_MODAL } from '../actionConstants';

const closeModal = () => (dispatch) => {
    dispatch({
        type: CLOSE_MODAL,
    });
};

const openModal = (err) => (dispatch) => {
    dispatch({
        type: OPEN_MODAL,
        payload: {
            errorMessage: err,
        },
    });
};

export { closeModal, openModal };
