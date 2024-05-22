import React from 'react';
import DashHeader from '../DashHeader/DashHeader';
import { Outlet } from 'react-router-dom';

const LayOutDashBoard = () => {
    return (
        <div>
            <DashHeader></DashHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOutDashBoard;