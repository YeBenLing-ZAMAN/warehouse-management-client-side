import React from 'react';
import useWareHouseLoad from '../../hooks/useWareHouseLoad';
import Loading from '../CommonComponent/Loading';
import Service from './Service';

const PackagesService = () => {
    const [warehouses] = useWareHouseLoad();
    if (warehouses === undefined) {
        return <Loading></Loading>
    }
    return (
        <div style={{ 'minHeight': '100vh' }}>
            <div className=" position-relative my-4  ">
                <div className=" d-flex justify-content-center align-items-center">
                    <h1 className="text-center mt-5 mb-4 fw-bolder text-danger">OUR PACKAGE AND WAREHOUSE</h1>
                    {/* <button class="btn btn-danger btn-sm ms-2" id="toastbtn">hot offer</button> */}
                </div>
            </div>
            <div className='container mt-3 d-flex align-items-center justify-content-center flex-wrap'>
                {
                    warehouses.map(warehouse => <Service key={warehouse.id} warehouse={warehouse}></Service>)
                }
            </div>
        </div>
    );
};

export default PackagesService;