import React from 'react';
import { useForm } from "react-hook-form";
import SocailLogInAndSignUp from './SocailLogInAndSignUp';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }
    return (
        <div style={{ 'height': "100vh" }} className='d-flex flex-column align-items-center justify-content-center'>
            <div className='container w-100 w-md-50'>
                <h1 className='text-center text-uppercase'>USER SignUP</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' type="text" {...register("Name", { required: true })} />
                    <input className='mb-2' placeholder='Email' type="email" {...register("email", { required: true })} />
                    <input className='mb-2' placeholder='Password' type="text" {...register("password", { required: true })} />
                    <input className="btn btn-dark" type="submit" />
                </form>
                <p>Have Account on Food Factory? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            </div>
            <div>
                <SocailLogInAndSignUp></SocailLogInAndSignUp>
            </div>
        </div>
    );
};

export default SignUp;