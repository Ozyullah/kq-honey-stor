import React from 'react';
import Header from '../Pages/Shared-pages/Header/Header';
import Header0 from '../Pages/Shared-pages/Header/Header0';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared-pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Header0></Header0>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;