import React from 'react';
import google from '../../Image/social/google.png';
const SocailLogInAndSignUp = () => {

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-100'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-100'></div>
            </div>
            <div>
                <button
                    // onClick={() => signInWithGoogle()}
                    className='btn btn-info w-100 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocailLogInAndSignUp;