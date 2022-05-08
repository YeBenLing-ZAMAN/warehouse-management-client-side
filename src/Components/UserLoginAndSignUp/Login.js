import React from 'react';
import { useForm } from 'react-hook-form';
import SocailLogInAndSignUp from './SocailLogInAndSignUp';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../CommonComponent/Loading';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        await signInWithEmailAndPassword(data.email, data.password);
        navigate(from, { replace: true });
    })

    let errorElement;
    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    
    if (user) {
        navigate(from, { replace: true });
    }

    const navigateSignUP = event => {
        navigate('/signup');
    }

    return (
        <div style={{ 'height': "100vh" }} className='d-flex flex-column align-items-center justify-content-center'>
            <div className='container w-100 w-md-50'>
                <h1 className='text-center text-uppercase'>user login</h1>
                {errorElement}
                <form className='d-flex flex-column' onSubmit={onSubmit}>
                    <input className='mb-2' placeholder='Email' type="email" {...register("email", { required: true })} />
                    <input className='mb-2' placeholder='Password' type="text" {...register("password", { required: true })} />
                    <input className="btn btn-dark" type="submit" />
                </form>
                <p>New On Food Factory? <Link to="/signup" className='text-danger m-0 p-0 text-decoration-none' onClick={navigateSignUP}>Please signUp</Link> </p>
                <Link to='/resetPassword' className='btn btn-link text-primary m-0 p-0 text-decoration-none'>Are you forget Password ?</Link>
            </div>
            <div>
                <SocailLogInAndSignUp></SocailLogInAndSignUp>
            </div>
        </div>
    );
};

export default Login;