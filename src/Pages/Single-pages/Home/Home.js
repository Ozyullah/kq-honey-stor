import React from 'react';
import Banner from '../../Shared-pages/Banner/Banner';
// import Header from '../../Shared-pages/Header/Header';
// import Header1 from '../../Shared-pages/Header1/Header1';
// import Header0 from '../../Shared-pages/Header/Header0';
import Category from '../../Shared-pages/Category/Category';
import HotDeals from '../../Shared-pages/Deals/HotDeals/HotDeals';
import ForYou from '../../Shared-pages/Specific/ForYou';
import Shorts from '../../Shared-pages/VideoPlayer/ShortsVideo/Shorts';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Shorts></Shorts>

            <Category></Category>
            <HotDeals></HotDeals>
            <ForYou></ForYou>
        </div>
    );
};

export default Home;