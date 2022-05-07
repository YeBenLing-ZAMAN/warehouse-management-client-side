import React from 'react';
import Service from '../../Service/Service';
import StoreItems from '../../StoreItems/StoreItems';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StoreItems></StoreItems>
        </div>
    );
};

export default Home;