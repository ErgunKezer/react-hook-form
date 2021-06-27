import React from 'react';
import { useForm } from 'react-hook-form';
import { openModal } from '../../redux/actions';
import { connect } from 'react-redux';
import { validator } from '../../utils';
import './signUp.scss';
const SignUp = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const onSubmit = (data) => console.log(data);
    const onInvalid = (err) => {
        const formErrors = Object.values(err).map((o) => o.message);
        props.openModal(formErrors);
    };
    return (
        <div className='sign-up'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
                <input
                    placeholder='Name'
                    {...register('name', validator.name)}
                    className={errors?.name && 'error'}
                />
                <input
                    placeholder='Age 18-99'
                    type='number'
                    {...register('age', validator.age)}
                    className={errors?.age && 'error'}
                />
                <input
                    placeholder='User Name'
                    {...register('userName', validator.userName)}
                    className={errors?.userName && 'error'}
                />
                <input
                    placeholder='Password'
                    type='password'
                    {...register('password', validator.password)}
                    className={errors?.password && 'error'}
                />
                <div className='checkbox-wrapper'>
                    <input
                        type='checkbox'
                        id='agreement'
                        {...register('agreement', validator.agreement)}
                    ></input>
                    <label htmlFor='agreement' className={errors?.agreement && 'error'}>
                        Accept agreement!!!
                    </label>
                </div>
                <button type='submit' className='submit'>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default connect(null, {
    openModal,
})(SignUp);
