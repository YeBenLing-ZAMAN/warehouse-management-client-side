import React from 'react';
import { Link } from 'react-router-dom';
import  notFoundImage from '../../../Image/notFoundImage/notFound.jpg';

const NotFound = () => {
    return (
        <div>
            <div className='d-flex flex-column flex-md-row align-items-center justify-content-center' style={{height:'100vh'}}>
                <div className='d-flex flex-column justify-content-center ps-5'>
                    {/* <p className=''>
                        Error 404
                    </p> */}
                    <h1 className=''>
                        Oops! The page you're looking for isn't here.
                    </h1>
                    <p className=''>
                        You might have the wrong address, or the page may have moved.
                    </p>
                    <div>

                        <Link to='/home' className='mx-2 btn btn-danger'>
                            Back to homepage
                        </Link>
                        <Link to='/blog' className='mx-2 btn btn-danger'>
                            Blogs
                        </Link>
                    </div>
                </div>
                <div className='d-flex align-items-center p-5'>
                    <div >
                        <img className='img-fluid'
                            src={notFoundImage}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;