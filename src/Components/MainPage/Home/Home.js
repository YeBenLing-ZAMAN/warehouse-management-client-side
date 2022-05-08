import React from 'react';
import PackagesService from '../../Service/PackagesService';
import Question from '../../Service/Question';
import StoreItems from '../../StoreItems/StoreItems';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StoreItems></StoreItems>
            <PackagesService></PackagesService>
            <Question></Question>
        </div>
    );
};

export default Home;