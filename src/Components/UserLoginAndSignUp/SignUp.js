import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SocailLogInAndSignUp from './SocailLogInAndSignUp';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../CommonComponent/Loading';
import useToken from './useToken';


const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    
    
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    /* jwt token using */
    const [token] = useToken(user);

    if (loading) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    const onSubmit = async (data) => {
        const name = data?.name;
        const email = data?.email;
        const password = data?.password;
        // console.log(data);
        await updateProfile({ displayName: name });
        console.log('Updated profile');

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate(from, { replace: true });
    }

    const navigateLogin = event => {
        navigate('/login');
    }

    return (
        <div style={{ 'height': "100vh" }} className='d-flex flex-column align-items-center justify-content-center'>
            <div className='container login-container'>
                <h1 className='text-center text-uppercase'>USER SignUP</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' type="text" {...register("Name", { required: true })} />
                    <input className='mb-2' placeholder='Email' type="email" {...register("email", { required: true })} />
                    <input className='mb-2' placeholder='Password' type="password" {...register("password", { required: true })} />
                    <div className='d-flex align-items-center'>
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Food Foctory Terms and Conditions</label>
                    </div>
                    <input disabled={!agree} className="btn btn-dark" type="submit" />
                </form>
                {errorElement}
                <p>Have Account on Food Factory? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            </div>
            <div>
                <SocailLogInAndSignUp></SocailLogInAndSignUp>
            </div>
        </div>
    );
};

export default SignUp;