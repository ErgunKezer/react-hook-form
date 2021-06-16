import React from 'react';
import { useForm } from 'react-hook-form';
import { openModal } from '../../redux/actions';
import { connect } from 'react-redux';
import { validator } from '../../utils';

const SignUp = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const onSubmit = (data) => console.log(data);
    const onInvalid = (err) => props.openModal('Please enter the required fields');
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
                <input
                    placeholder='First Name'
                    {...register('firstName', validator.name)}
                    className={errors?.firstName && 'error'}
                />
                <input
                    placeholder='Last Name'
                    {...register('lastName', validator.name)}
                    className={errors?.lastName && 'error'}
                />
                <input
                    placeholder='Age 18-99'
                    type='number'
                    {...register('age', validator.age)}
                    className={errors?.age && 'error'}
                />
                <input type='submit' className='submit' />
            </form>
        </div>
    );
};

export default connect(null, {
    openModal,
})(SignUp);
