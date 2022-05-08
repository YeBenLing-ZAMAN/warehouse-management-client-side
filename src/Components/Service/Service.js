import React from 'react';

const Service = (props) => {
    console.log(props);
    const {name,price,img}= props.warehouse;
    return (
        <>
         <div className='mx-2 my-2 border border-1 rounded rounded-3 shadow-md p-1 shadow-lg '>
            <img src={img} style={{ 'height': '200px' }} alt="" />
            <h5 className=''>{name}</h5>
            <p className=''>Price: {price}</p>
            <button className='btn btn-outline-danger w-100'>VIEW STORAGE UNIT</button>
        </div>
        
        </>
    );
};

export default Service;