import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorModal } from '../modals';
import { openModal } from '../../redux/actions';
import { connect } from 'react-redux';
const nameValidationRules = {
    required: true,
    maxLength: 10,
    pattern: /^[A-Za-z]+$/i,
};
const ageValidation = {
    required: true,
    min: 18,
    max: 99,
};

const SignIn = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
    const onInvalid = (err) => props.openModal('Please enter the required fields');
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
                <input
                    placeholder='First Name'
                    {...register('firstName', nameValidationRules)}
                    className={errors?.firstName && 'error'}
                />
                <input
                    placeholder='Last Name'
                    {...register('lastName', nameValidationRules)}
                    className={errors?.lastName && 'error'}
                />
                <input
                    placeholder='Age 18-99'
                    type='number'
                    {...register('age', ageValidation)}
                    className={errors?.age && 'error'}
                />
                <input type='submit' className='submit' />
            </form>
            <ErrorModal />
        </div>
    );
};

export default connect(null, {
    openModal,
})(SignIn);
