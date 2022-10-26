import React from 'react';
import { Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DarkMode from '../pages/Others/DarkMode';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import LeftSideNavBar from '../pages/Shared/LeftSideNavBar';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4 lg:grid-cols-4'>
                <div className='text-start col-span-2 lg:col-span-1'>
                    <LeftSideNavBar></LeftSideNavBar>
                </div>
                <div className='col-span-2 lg:col-span-3'>

                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;