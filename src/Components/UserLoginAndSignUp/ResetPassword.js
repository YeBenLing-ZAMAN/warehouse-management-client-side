import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const ResetPassword = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
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
        </div>
    );
};

export default ResetPassword;