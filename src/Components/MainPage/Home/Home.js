import React from 'react';
import PackagesService from '../../Service/PackagesService';
import StoreItems from '../../StoreItems/StoreItems';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StoreItems></StoreItems>
            <PackagesService></PackagesService>
        </div>
    );
};

export default Home;