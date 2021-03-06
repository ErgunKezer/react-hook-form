import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { closeModal } from '../../redux/actions';

const ErrorModal = ({ open, message, closeModal }) => {
    const style = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            borderRadius: '8px',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
    };
    let content = '';
    if (typeof message === 'string') {
        content = <p>{message}</p>;
    } else {
        content = (
            <ol>
                {message.map((o, idx) => (
                    <li key={idx}>{o}</li>
                ))}
            </ol>
        );
    }

    return (
        <Modal
            isOpen={open}
            contentLabel='Example Modal'
            ariaHideApp={false}
            style={style}
            onRequestClose={closeModal}
            preventScroll={true}
        >
            <div className='modal-error'>
                <span className='closeModal' onClick={closeModal}>
                    x
                </span>
                <h2>Error</h2>
                {content}
            </div>
        </Modal>
    );
};

const mapStateToProps = (state) => {
    return {
        open: state.modalReducer.showModal,
        message: state.modalReducer.message,
    };
};

export default connect(mapStateToProps, {
    closeModal,
})(ErrorModal);
