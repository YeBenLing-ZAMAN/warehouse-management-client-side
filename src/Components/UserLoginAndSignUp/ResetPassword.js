import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../CommonComponent/Loading';


const ResetPassword = () => {
    const { register, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();

    if (sending) {
        return <Loading></Loading>
    }

    const onSubmit = async(data) => {
        const email = data.email;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent!');
            // navigate('/login');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div style={{ 'height': "100vh" }} className='d-flex flex-column align-items-center justify-content-center'>
            <div className='container w-100 w-md-50'>
                <h1 className='text-center text-uppercase'>USER Password Reset</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Email' type="email" {...register("email", { required: true })} />
                    <input className="btn btn-dark" type="submit" />
                </form>
                <Link to='/login' className='btn btn-link text-primary m-0 p-0 text-decoration-none'>Are you remember your password?</Link>
            </div>
            <ToastContainer />
        </div>
        
    );
};

export default ResetPassword;